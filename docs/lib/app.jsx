import 'bootstrap-scss'
import 'video-react-scss'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { renderToString } from 'react-dom/server'
import {HelmetProvider} from 'react-helmet-async'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'
import routes from './routes.jsx'

if (typeof document !== 'undefined') {
  const outlet = document.getElementById('app')

  const root = createRoot(outlet)

  root.render(
    <Router>
      <Routes>
          {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element}>
                  {route.children && route.children.map((childRoute, childIndex) => (
                      <Route
                          key={childIndex}
                          path={childRoute.path}
                          element={childRoute.element}
                      />
                  ))}
              </Route>
          ))}
      </Routes>
    </Router>,
  )
}

export default (locals, callback) => {
    const location = locals.path;
    const helmetContext = {};  // Provide an empty context object for Helmet

    // Render the app to a string
    const body = renderToString(
        <HelmetProvider context={helmetContext}>
            <StaticRouter location={location}>
                <Routes>
                    {routes.map((route, index) => (
                        <Route key={index} path={route.path} element={<route.component />} />
                    ))}
                </Routes>
            </StaticRouter>
        </HelmetProvider>
    );

    const { helmet } = helmetContext;  // Access the Helmet context

    const markup = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <link rel="icon" href="/assets/favicon.ico">
        <link rel="stylesheet" href="/assets/main.css"/>
        <link rel="stylesheet" href="/assets/docs.css"/>
      </head>
      <body>
        <div id="app">${body}</div>
        <script src="/assets/prism.js" data-manual></script>
        <script src="/bundle.js"></script>
      </body>
    </html>`;

    callback(null, markup);
};