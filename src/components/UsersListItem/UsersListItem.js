import React from 'react';
import PropTypes from 'prop-types';

// destrukturyzujemy od razu props
const UsersListItem = ({ user: { average, name, attendance } }) => {
  return (
    <li>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>{attendance}</p>
      </div>
      <button>X</button>
    </li>
  );
};

UsersListItem.propTypes = {
  user: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string,
    attendance: PropTypes.string
  })
};

export default UsersListItem;
