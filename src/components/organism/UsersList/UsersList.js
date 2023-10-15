import React, { useEffect, useState } from 'react';
// import {useContext} from 'react';
import styles from './UsersList.module.scss';
import shortid from 'shortid';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import ViewWrapper from '../../molecules/ViewWrapper/ViewWrapper';
// import { UserContext } from '../../../providers/UsersProvider';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const UsersList = () => {
  // we get the params from the route in App.js
  const { id } = useParams();

  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  const sortedStudents = students
    ? students.sort((a, b) => a.name.localeCompare(b.name))
    : [];

  useEffect(() => {
    axios
      // if id is not provided, we use the first group from the groups array
      .get(`/students/${id || groups[0]}`) // endpoint with studens data
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.error(err));
  }, [id, groups]);

  useEffect(() => {
    axios
      .get('/groups') // endpoint with groups data
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.error(err));
  }, []);

  // const { user } = useContext(UserContext);

  return (
    <ViewWrapper>
      <nav>
        {groups.map((group) => (
          <Link
            style={{ paddingRight: '5px' }}
            key={shortid.generate()}
            to={`/group/${group}`}
          >
            {group}
          </Link>
        ))}
      </nav>
      <ul className={styles.list}>
        {sortedStudents.map((user) => (
          <UsersListItem user={user} key={shortid.generate()} />
        ))}
      </ul>
    </ViewWrapper>
  );
};

export default UsersList;
