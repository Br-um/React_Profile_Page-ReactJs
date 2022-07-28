import styles from './Profile.module.css'
import Loader from '../components/Loader'
import { useEffect, useState } from 'react'
function Profile() {

    const [user, setUser] = useState([])
    const [loader, setLoader] = useState(true)
    const API = 'http://localhost:5000'

    useEffect(() => {
        setTimeout(() => {
            fetch(API + '/user', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    setUser(data)
                    setLoader(false)
                })
                .catch(err => console.log(err))
        }, 300)
    }, [])


    return (
        <div className={styles.Profile}>
            <div className={styles.ProfileInfo}>
                <img className={styles.ProfileImage} src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png" alt="profile" />
                <div className={styles.ProfileData}>
                    <h3>Personal Informations:</h3>
                    {loader
                        ?
                        <Loader />
                        :
                        <p>Bem vindo!, <b>{user.map(val => { return val.name + " " + val.lastname })}</b></p>

                    }
                    {loader
                        ? <Loader />
                        : <p>Birth: <b>{user.map(val => val.date)}</b></p>
                    }
                    {loader
                        ? <Loader />
                        : <p>Phone: {user.map(val => val.phone)}</p>
                    }
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Profile