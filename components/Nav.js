import styles from '../styles/Nav.module.css'
import Link from 'next/link'

const Nav = () => {
    return (
        <div className={styles.nav}>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/blog'>Blog</Link></li>
            </ul>
        </div>
    )
}

export default Nav