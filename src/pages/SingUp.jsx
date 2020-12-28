import React, { useState, useEffect }from 'react'
import axios from 'axios'
import { API_URL } from '../config'
import { useMessage } from '../components/message.hook'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'


export const SingUp = () => {

    const history = useHistory()
    const [ t ] = useTranslation() 
    const message = useMessage()
    const [error, setError] = useState(null)
    const clearError = () => {setError(null)}
    const [form, setForm]  = useState({ identifier: '', password: ''})
    const changeHandler = (event) => {setForm({...form, [event.target.name]: event.target.value })}

    const registerHandler = async(event) => {
        event.preventDefault()
        axios
        .post(`${API_URL}/auth/local/register`, {...form})
        .then(response => {
          console.log('Well done!');
          console.log('User profile', response.data.user);
          console.log('User token', response.data.jwt);
          history.push('/login')
        })
        .catch(error => {
            setError(JSON.parse(error.response.request.response).message[0].messages[0].message)
        });
    }
    
    useEffect(() => {
        message(error)
        clearError()
    }, [error, message])

    return (
        <div className="row">
            <div className="col m6 s12 offset-m3 ">
                <div className="card-login">
                    <div className="card ">
                        <div className="card-content">
                            <span className="card-title">{t('singup.singup')}</span>
                            <div className="row">
                                <form className="col s12">
                                <div className="row">
                                        <div className="input-field col s12">
                                            <input onChange={changeHandler} id="text" type="text" name="username" className= "purple-input" />
                                            <label htmlFor="username">UserName</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input onChange={changeHandler} id="email" type="email" name="email" className="validate purple-input" />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input onChange={changeHandler} id="password" type="password" name="password" className="validate purple-input" />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                    </div>
                                    <button onClick={registerHandler} className="btn  deep-purple darken-1" type="submit">{t('singup.singup')}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
