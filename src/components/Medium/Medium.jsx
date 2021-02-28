/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

import Spinner from './Spinner';

import './Medium.css';

export class Medium extends Component {
  state = {
    loading: true,
    list: [],
  };

  componentDidMount() {
    axios
      .get(
        'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40joshuapleduc'
      )
      .then((data) => {
        this.setState({
          list: data.data.items,
          loading: false,
        });
      });
  }

  render() {
    const { list, loading } = this.state;
    if (loading) {
      return (
        <>
          <Spinner />
        </>
      );
    }
    return (
      <div>
        <h1 style={{ margin: '1em 0' }}>Medium Articles</h1>
        {list.map(({ title, thumbnail, link }) => (
          <>
            <Card
              style={{
                width: '18rem',
                display: 'inline-block',
                verticalAlign: 'top',
                height: '25em',
                margin: '1em 1em',
              }}
            >
              <Card.Img variant="top" src={thumbnail} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
              </Card.Body>
              <Button variant="primary" href={link}>
                Go to Article
              </Button>
            </Card>
          </>
        ))}
      </div>
    );
  }
}

export default Medium;
