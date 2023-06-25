import { useRouter } from 'next/router';
import { Button } from 'antd';
import LoginForm from '../components/LoginForm';
import styles from '../styles/UniversalStyles.module.scss'

function Home() {

  return (
    <div>
      <LoginForm />
      
      <div className={styles.registerDiv}>
        <Button className={styles.Button} type="primary" href="/register">Register</Button>
      </div>

    </div>
  );
}

export default Home

