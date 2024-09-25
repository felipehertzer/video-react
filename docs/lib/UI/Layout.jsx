import React from 'react'
import {Helmet} from 'react-helmet-async'
import Footer from './Footer.jsx'
import Nav from './Nav.jsx'

export default (props) => {
  return (
    <div className="wrapper">
      <Helmet
        titleTemplate="Video-React - %s"
        title="React Video Component"
        defaultTitle="React Video Component"
        meta={[
          {
            name: 'description',
            content:
              'Video-React is a web video player built from the ground up for an HTML5 world using React library.',
          },
          {
            property: 'og:type',
            content: 'article',
          },
        ]}
      />
      <Nav />
      {props.children}
      <Footer />
    </div>
  )
}
