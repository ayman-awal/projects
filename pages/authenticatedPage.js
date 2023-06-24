import React, { useEffect, useState } from 'react';
import { getUserInfo } from '../utils/api';
import styles from '../styles/LoginForm.module.css'

const authenticatedPage = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const data = await getUserInfo(token);
          setUserInfo(data);
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  console.log("userInfo: ", userInfo);

  if (!userInfo) {
    return <p>Loading user info...</p>;
  }

  return (
    <div className={styles.container}>
      <h1>Welcome, you have successfully logged in!</h1>
      <p><strong>Name:</strong> {userInfo.user.name}</p>
      <p><strong>Email:</strong> {userInfo.user.email}</p>
    </div>
  );
};

export default authenticatedPage;
