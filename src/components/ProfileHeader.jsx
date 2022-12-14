import { Link } from 'react-router-dom'
import styles from './ProfileHeader.module.css'
import { useState } from 'react'
function ProfileHeader() {

    const [profileClick, setProfileClick] = useState("")
    const [projectClick, setProjectClick] = useState("")

    const click1 = () => {
        setProfileClick("act")
        setProjectClick("")
    }
    const click2 = () => {
        setProjectClick("act")
        setProfileClick("")
    }
    return (
        <nav className={styles.UserNav}>
            <ul className={styles.UserList}>
                <Link onClick={click1} to={`/profile`}>
                    <li className={`${styles.UserLink} ${styles[profileClick]}`}>
                        Accont Info.
                    </li>
                </Link>
                <Link onClick={click2} to='/projects'>
                    <li className={`${styles.UserLink} ${styles[projectClick]}`}>
                        My Projects
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default ProfileHeader