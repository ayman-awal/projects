import { useState } from 'react';
import { loginUser } from '../utils/api';
import { useRouter } from 'next/router';
import { Button, Input } from 'antd';
import styles from '../styles/LoginForm.module.css';


export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (info) => {
    info.preventDefault();
    try {
      const response = await loginUser({email,password,});
      console.log('token', response.token);
      //setCookie('token', response.token);     
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
