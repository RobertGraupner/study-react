import React from 'react';
import styles from './NewsSection.module.scss';
import ViewWrapper from '../../molecules/ViewWrapper/ViewWrapper';
import Button from '../../atoms/Button/Button';

const NewsSection = () => {
  return (
    <div className={styles.news}>
      <h2 className={styles.sectionHeader}>News Section</h2>
      <ViewWrapper className={styles.articleWrapper}>
        <div className={styles.articleTitle}>
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          consequat ipsum in felis tristique elementum. Morbi vitae pellentesque
          turpis. Donec bibendum nisi purus, ut sollicitudin tortor eleifend in.
          Sed ullamcorper nisl et dictum faucibus. Curabitur magna justo,
          blandit ut consequat vel, sodales et orci.
        </p>
        <Button>Read more</Button>
      </ViewWrapper>
    </div>
  );
};

export default NewsSection;
