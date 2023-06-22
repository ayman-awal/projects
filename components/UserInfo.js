import { useEffect, useState } from 'react';
import { getUserInfo } from '../utils/api';
import { getCookie } from '../utils/auth';

export default function UserInfo() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getCookie('token');
        const response = await getUserInfo(token);
        setUserInfo(response);
      } catch (error) {
        console.error('User info error:', error);
      }
    };

    fetchData();
  }, []);

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Info</h2>
      <p>Name: {userInfo.name}</p>
      <p>Email: {userInfo.email}</p>
    </div>
  );
}
