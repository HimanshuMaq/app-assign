import React, { useContext } from 'react'
import Input from '../../components/Input'
import '../../styles/bootstrap.css'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../App';

export default function Login ()
{
        const { dispatch } = useContext(AppContext);
        const changeInputValue = (newValue) => {

            dispatch({ type: 'UPDATE_INPUT', data: newValue,});
        };
        return (
            <div>
                <div className="logincontainer">
                    <h1>Welcome </h1>
                    <h2>Let's Begin</h2>
                    <h3>Username</h3>
                    <Input placeholder="Your Name" onChange={event=>changeInputValue(event.target.value)} name="username" type="text" />
                    <h3>Password</h3>
                    <Input placeholder="Your Password" onChange={event => changeInputValue(event.target)} name="password" type="password" />
                    <button >
                        <Link to='/home'>Log In</Link>
                    </button>
                </div>
            </div>
        )
    
}

