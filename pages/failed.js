import Link from "next/link"
import { Button, Input } from 'antd';
import styles from '../styles/UniversalStyles.module.scss'



export default function failed() {
    return (
        <div>
            <div className={styles.container}>
                <h1>You entered the wrong information!</h1>
                <h2>Try again</h2>
                <Button className={styles.Button} type="primary" href="/login">Login</Button>
                <Button className={styles.Button} type="primary" href="/register">Register</Button>
            </div>

        </div>
    );
}



