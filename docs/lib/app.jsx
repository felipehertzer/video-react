import 'bootstrap-scss'
import 'video-react-scss'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { renderToString } from 'react-dom/server'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'
import routes from './routes.jsx'

// Client render (optional):
if (typeof document !== 'undefined') {
  const outlet = document.getElementById('app')

  // React 18's root API
  const root = createRoot(outlet)

  // Rendering the Router with Routes
  root.render(
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </Router>,
  )
}

// Exported static site renderer (for server-side rendering):
export default (locals, callback) => {
  const location = locals.path

  // Rendering on server-side with `renderToString`
  const body = renderToString(
    <StaticRouter location={location}>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </StaticRouter>,
  )

  const head = Helmet.renderStatic()

  // Final HTML string
  const markup = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        ${head.title.toString()}
        ${head.meta.toString()}
        <link rel="icon" href="/assets/favicon.ico">
        <link rel="stylesheet" href="/assets/main.css"/>
        <link rel="stylesheet" href="/assets/docs.css"/>
      </head>
      <body>
        <div id="app">${body}</div>
        <script src="/assets/prism.js" data-manual></script>
        <script src="/bundle.js"></script>
      </body>
    </html>`

  callback(null, markup)
}
