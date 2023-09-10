import styles from './ViewWrapper.module.scss';
import PropTypes from 'prop-types';

const ViewWrapper = ({ as: As = 'div', children, ...props }) => {
  return (
    <As className={styles.wrapper} {...props}>
      {children}
    </As>
  );
};

ViewWrapper.propTypes = {
  children: PropTypes.node,
  as: PropTypes.string
};

export default ViewWrapper;
