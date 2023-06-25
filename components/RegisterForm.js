import { useState } from 'react';
import { useRouter } from 'next/router';
import { registerUser } from '../utils/api';
import VerifyForm from './VerifyForm';

import { Button, Input } from 'antd';
import styles from '../styles/UniversalStyles.module.scss';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';

export default function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const dispatch = useDispatch();


  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({
        name,
        email,
        password,
      });
      console.log(response);
      const user = { name, email };
      localStorage.setItem('email', email);
      //dispatch(setUser(user));
      setRegistrationComplete(true);
      //router.push('/authenticatedPage');

    } catch (error) {
      console.error('Registration error:', error);
      router.push("/failed");
    }
  };

  if (registrationComplete) {
    //router.push("/verify");
    return <VerifyForm email={email} />;
  }

  return (
    <div className={styles.container}>
        <form onSubmit={handleRegister}>
          <h1>Sign Up</h1>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />

          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <Button className={styles.Button} htmlType="submit" type="primary">Register</Button>
        </form>
    </div>
    
  );
}
