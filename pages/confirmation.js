import Link from "next/link"
import styles from '../styles/LoginForm.module.css';
import { Button, Input } from 'antd';

export default function Login() {
    return(
        <div className={styles.container}>
            <h1>You have successfully registered!</h1>
            <Button type="primary" className={styles.Button} href="/login">Login</Button>
        </div>
    )
  }