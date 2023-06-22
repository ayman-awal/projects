import { useState } from 'react';
import { loginUser } from '../utils/api';
import { setCookie } from '../utils/auth';
import { useRouter } from 'next/router';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (info) => {
    info.preventDefault();
    try {
      const response = await loginUser({email,password,});
      //setCookie('token', response.token); 
      router.push('/authenticated');
      
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(info) => setEmail(info.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(info) => setPassword(info.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
