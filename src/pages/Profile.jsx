import styles from './Profile.module.css'
import Loader from '../components/Loader'
import { useEffect, useState } from 'react'
function Profile() {

    // States
    const [user, setUser] = useState([])
    const [loader, setLoader] = useState(true)

    const [editName, setEditName] = useState(false)
    const [editBirth, setEditBirth] = useState(false)
    const [editPhone, setEditPhone] = useState(false)
    const [editCpf, setEditCpf] = useState(false)
    const [editDescription, setEditDescription] = useState(false)
    const [editInterests, setEditInterests] = useState(false)

    // API
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
                                        <span className={styles.ProfileSaveBtn}>save</span>
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
                                        <input className={styles.ProfileInput} type="date" />
                                        <span className={styles.ProfileSaveBtn}>save</span>
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
                                        <input className={styles.ProfileInput} type="phone" placeholder={user.map(val => val.phone)} />
                                        <span className={styles.ProfileSaveBtn}>save</span>
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
                                        <input className={styles.ProfileInput} type="number" placeholder={user.map(val => val.cpf)} />
                                        <span className={styles.ProfileSaveBtn}>save</span>
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
                        : editDescription
                            ?
                            <>
                                <textarea className={`${styles.ProfileInput} ${styles.ProfileTextArea}`} type="number" placeholder={user.map(val => val.description)} />
                                <span className={styles.ProfileSaveBtn}>save</span>
                            </>
                            : <p onClick={() => setEditDescription(true)}>{user.map(val => val.description)}</p>
                    }
                </div>
                <div>
                    <h3>Interests</h3>
                    {loader
                        ? <Loader />
                        : editInterests
                            ?
                            <>
                                <textarea className={`${styles.ProfileInput} ${styles.ProfileTextArea}`} type="text" placeholder={user.map(val => val.interests)} />
                                <span className={styles.ProfileSaveBtn}>save</span>
                            </>
                            : <p onClick={() => setEditInterests(true)}> {user.map(val => val.interests)}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile