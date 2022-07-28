import styles from './Profile.module.css'
import Loader from '../components/Loader'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
function Profile() {

    const [user, setUser] = useState([])
    const [loader, setLoader] = useState(true)
    const location = useLocation()
    const [editName, setEditName] = useState(false)
    const [editBirth, setEditBirth] = useState(false)
    const [editPhone, setEditPhone] = useState(false)
    const [editCpf, setEditCpf] = useState(false)
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
                    <div className={styles.ProfilePerson}>
                        <h3>Personal Informations:</h3>
                        {loader
                            ?
                            <Loader />
                            :
                            <p>Welcome!,
                                {editName
                                    ?
                                    <>
                                        <input className={styles.ProfileInput} type="text" placeholder='Name: ' />
                                        <a className={styles.ProfileSaveBtn}>save</a>
                                    </>
                                    :
                                    <b onClick={() => setEditName(true)}> {user.map(val => val.name)}
                                    </b>
                                }
                            </p>
                        }
                        {loader
                            ? <Loader />
                            : <p>Birth:
                                {editBirth
                                    ?
                                    <>
                                        <input className={styles.ProfileInput} type="date" placeholder='Birth: ' />
                                        <a className={styles.ProfileSaveBtn}>save</a>
                                    </>
                                    :
                                    <b onClick={() => setEditBirth(true)}>{user.map(val => val.date)}</b>
                                }
                            </p>
                        }
                        {loader
                            ? <Loader />
                            : <p>Phone:
                                {editPhone
                                    ?
                                    <>
                                        <input className={styles.ProfileInput} type="phone" placeholder='Phone: ' />
                                        <a className={styles.ProfileSaveBtn}>save</a>
                                    </>
                                    :
                                    <b onClick={() => setEditPhone(true)}>{user.map(val => val.phone)}</b>
                                }</p>
                        }
                        {loader
                            ? <Loader />
                            : <p>CPF:
                                {editCpf
                                    ?
                                    <>
                                        <input className={styles.ProfileInput} type="number" placeholder='CPF: ' />
                                        <a className={styles.ProfileSaveBtn}>save</a>
                                    </>
                                    :
                                    <b onClick={() => setEditCpf(true)}>{user.map(val => val.cpf)}</b>
                                }
                            </p>
                        }
                    </div>
                </div>
            </div >
            <div className={styles.ProfileMore}>
                <h2>More Informations:</h2>
                <div>
                    <h3>Description:</h3>
                    {loader
                        ? <Loader />
                        : <p>{user.map(val => val.description)}</p>
                    }
                </div>
                <div>
                    <h3>Interests</h3>
                    {loader
                        ? <Loader />
                        : < p > {user.map(val => val.interests)}</p>
                    }
                </div>
            </div>
        </div >
    )
}

export default Profile