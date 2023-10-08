import React from 'react';
import { useState, useEffect } from 'react';
import styles from './NewsSection.module.scss';
import ViewWrapper from '../../molecules/ViewWrapper/ViewWrapper';
import Button from '../../atoms/Button/Button';
import axios from 'axios';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios({
      url: 'https://graphql.datocms.com/',
      method: 'post',
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`
      },
      data: {
        query: `{
          allArticles {
            id
            title
            category
            content
            image {
              url
            }
          }
        }`
      }
    })
      .then((response) => {
        setArticles(response.data.data.allArticles);
      })
      .catch(() => {
        setError(`Sorry, we couldn't load articles for you`);
      });
  }, []);

  return (
    <div className={styles.news}>
      <h2 className={styles.sectionHeader}>University news section</h2>
      {articles.length > 0 ? (
        articles.map((item) => (
          <ViewWrapper className={styles.articleWrapper} key={item.id}>
            <div className={styles.titleWrapper}>
              <h3>{item.title}</h3>
              <p>{item.category}</p>
            </div>
            <div className={styles.contentWrapper}>
              <p>{item.content}</p>
              {item.image ? <img src={item.image.url} alt='article' /> : null}
            </div>
            <Button>Read more</Button>
          </ViewWrapper>
        ))
      ) : (
        <h3 className={styles.sectionHeader}>{error ? error : 'Loading...'}</h3>
      )}
    </div>
  );
};

export default NewsSection;
