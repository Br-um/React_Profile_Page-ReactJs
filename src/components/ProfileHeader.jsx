import { Link } from 'react-router-dom'
import styles from './ProfileHeader.module.css'
import { useState } from 'react'
function ProfileHeader() {

    const [profileClick, setProfileClick] = useState("")
    const [alterClick, setAlterClick] = useState("")
    const [projectClick, setProjectClick] = useState("")

    const click1 = () => {
        setProfileClick("act")
        setAlterClick("")
        setProjectClick("")
    }
    const click2 = () => {
        setAlterClick("act")
        setProjectClick("")
        setProfileClick("")
    }
    const click3 = () => {
        setProjectClick("act")
        setProfileClick("")
        setAlterClick("")
    }

    return (
        <nav className={styles.UserNav}>
            <ul className={styles.UserList}>
                <Link onClick={click1} to='/profile'>
                    <li className={`${styles.UserLink} ${styles[profileClick]}`}>
                        Accont Info.
                    </li>
                </Link>
                <Link onClick={click2} to='/alter'>
                    <li className={`${styles.UserLink} ${styles[alterClick]}`}>
                        Edit
                    </li>
                </Link>
                <Link onClick={click3} to='/projects'>
                    <li className={`${styles.UserLink} ${styles[projectClick]}`}>
                        My Projects
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default ProfileHeader