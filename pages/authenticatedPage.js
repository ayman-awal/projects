import React, { useEffect } from 'react';
import { getUserInfo } from '../utils/api';
import styles from '../styles/UniversalStyles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/userSlice';

const authenticatedPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await getUserInfo(token);
          dispatch(setUser({ name: response.user.name, email: response.user.email }));
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Welcome, you have successfully logged in!</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default authenticatedPage;