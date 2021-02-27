import React, { useState } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import Spinner from './Spinner';
import c from './SingleBlog.module.css';

const Medium = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const [desc, setDesc] = useState('');

  axios
    .get(
      'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40joshuapleduc'
    )
    .then((data) => {
      setProfile({ avatar: data.data.feed.image, profileLink: data.data.feed.link });
      setList(data.data.items);
      setLoading(false);
    });

  const renderList = () => {
    const divStyle = {
      display: 'inline',
    };
    if (loading) {
      return (
        <>
          <Spinner />
        </>
      );
    }
    return (
      <div style={divStyle}>
        {list.map(({ title, author, pubDate, thumbnail, description }) => (
          <>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={thumbnail} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {
                    new DOMParser()
                      .parseFromString(description, 'text/html')
                      .getElementsByTagName('blockquote')[0].innerText
                  }
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </>
        ))}
      </div>
    );
  };

  return <div>{renderList()}</div>;
};

export default Medium;
