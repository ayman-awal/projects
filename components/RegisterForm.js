import { useState } from 'react';
import { useRouter } from 'next/router';
import { registerUser } from '../utils/api';
import VerifyForm from './VerifyForm';

export default function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationComplete, setRegistrationComplete] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({
        name,
        email,
        password,
      });
      console.log(response);
      setRegistrationComplete(true);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  if (registrationComplete) {
    return <VerifyForm email={email} />;
  }

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
}
