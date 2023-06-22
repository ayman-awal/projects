import { useState } from 'react';
import { useRouter } from 'next/router';
import { verifyEmail } from '../utils/api';

export default function VerifyForm({ email }) {
  const router = useRouter();
  const [otp, setOtp] = useState('');

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await verifyEmail(otp, email);
      console.log(response);

      router.push('/authenticated');
    } catch (error) {
      console.error('Verification error:', error);
    }
  };

  return (
    <form onSubmit={handleVerify}>
      <h2>Verify Email</h2>
      <input
        type="text"
        placeholder="OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button type="submit">Verify</button>
    </form>
  );
}
