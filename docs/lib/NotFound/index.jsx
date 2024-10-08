import React from 'react'
import { Button, Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet-async'

export default () => {
  return (
    <div>
      <Helmet title="404 Page Not Found" />
      <section className="jumbotron text-xs-center m-b-3">
        <Container fluid>
          <Row>
            <Col>
              <p className="lead">
                <img src="/assets/logo.png" alt="" width="150px" />
              </p>
              <h1 className="jumbotron-heading display-4">404 - Not Found</h1>
              <p className="lead">
                Can't find what you're looking for?{' '}
                <a href="https://github.com/video-react/video-react/issues/new">
                  Open
                </a>{' '}
                up an issue.
              </p>
              <p>
                <Button
                  outline
                  color="danger"
                  className="m-r-1"
                  tag={Link}
                  to="/"
                >
                  Get Started
                </Button>
                <Button color="danger" tag={Link} to="/components">
                  View Components
                </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}
