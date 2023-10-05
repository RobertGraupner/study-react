import styles from './ViewWrapper.module.scss';
import PropTypes from 'prop-types';

const ViewWrapper = ({
  as: As = 'div',
  children,
  className = '',
  ...props
}) => {
  return (
    <As className={`${styles.wrapper} ${className}`} {...props}>
      {children}
    </As>
  );
};

ViewWrapper.propTypes = {
  children: PropTypes.node,
  as: PropTypes.string,
  className: PropTypes.string
};

export default ViewWrapper;
