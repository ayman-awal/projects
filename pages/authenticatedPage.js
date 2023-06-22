import React, { useEffect, useState } from 'react';
import { getUserInfo } from '../utils/api';

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

  if (!userInfo) {
    return <p>Loading user info...</p>;
  }

  return (
    <div>
      <h1>Welcome, {userInfo.name}!</h1>
      <p>Email: {userInfo.email}</p>
      {/* Display other user information */}
    </div>
  );
};

export default authenticatedPage;
