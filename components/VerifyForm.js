import { useState } from 'react';
import { useRouter } from 'next/router';
import { verifyEmail } from '../utils/api';
import styles from '../styles/UniversalStyles.module.scss';
import { Button, Input } from 'antd';

import { setUser } from '../store/userSlice';
import { useDispatch } from 'react-redux';

export default function VerifyForm({ email }) {
  const router = useRouter();
  const [otp, setOtp] = useState('');
  //const dispatch = useDispatch();

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await verifyEmail(otp, email);
      console.log(response);
      //dispatch(setUser(response.user));
      router.push('/confirmation');
      console.log("Successfully registered");
    } catch (error) {
      console.error('Verification error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleVerify}>
        <h2>Verify Email</h2>
        <Input
          type="text"
          placeholder="Enter your OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <Button className={styles.Button} type="primary" htmlType="submit">Verify</Button>
      </form>
    </div>
  
  );
}
