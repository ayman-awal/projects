import { useState } from 'react';
import { loginUser } from '../utils/api';
import { useRouter } from 'next/router';
import { Button, Input } from 'antd';
import styles from '../styles/UniversalStyles.module.scss';

import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';


export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = async (info) => {
    info.preventDefault();
    try {
      const userData = { email, password };
      const response = await loginUser(userData);
      console.log('token', response.token);

      //const { name, email } = response.user;
      //dispatch(setUser({ name, email }));  
      localStorage.setItem('token', response.token);
      router.push('/authenticatedPage');
    } catch (error) {
      console.error('Login error:', error);
      router.push("/failed");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(info) => setEmail(info.target.value)}
            className={styles.input}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(info) => setPassword(info.target.value)}
            className={styles.input}
          />
          <Button className={styles.Button} htmlType="submit" type="primary">Login</Button>
      </form>
    </div>
  );
}
