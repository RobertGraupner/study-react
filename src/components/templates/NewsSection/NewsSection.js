import React from 'react';
import styles from './NewsSection.module.scss';
import ViewWrapper from '../../molecules/ViewWrapper/ViewWrapper';
import Button from '../../atoms/Button/Button';
import shortid from 'shortid';

const data = [
  {
    id: shortid.generate(),
    title: 'New computers at school',
    category: 'Tech news',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    id: shortid.generate(),
    title: 'New computers at school',
    category: 'Tech news',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    id: shortid.generate(),
    title: 'New computers at school',
    category: 'Tech news',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image:
      'https://images.unsplash.com/photo-1584713503693-bb386ec95cf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  },
  {
    id: shortid.generate(),
    title: 'New computers at school',
    category: 'Tech news',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: shortid.generate(),
    title: 'New computers at school',
    category: 'Tech news',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: null
  },
  {
    id: shortid.generate(),
    title: 'New computers at school',
    category: 'Tech news',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image:
      'https://images.unsplash.com/photo-1613919517761-0d9e719d3244?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
  }
];

const NewsSection = () => {
  return (
    <div className={styles.news}>
      <h2 className={styles.sectionHeader}>University news section</h2>
      {data.map((item) => (
        <ViewWrapper className={styles.articleWrapper} key={item.id}>
          <div className={styles.titleWrapper}>
            <h3>{item.title}</h3>
            <p>{item.category}</p>
          </div>
          <div className={styles.contentWrapper}>
            <p>{item.content}</p>
            {item.image ? <img src={item.image} alt='article' /> : null}
          </div>
          <Button>Read more</Button>
        </ViewWrapper>
      ))}
    </div>
  );
};

export default NewsSection;
