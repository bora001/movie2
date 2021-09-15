import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {loginUser} from '../../../_actions/user_action'


function LoginPage() {

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log('email',Email)
        console.log('Password', Password)
        
        let body = {
            email: Email,
            Password:Password
        }


        dispatch(loginUser(body))


    }
    
    return (
        <div>
            <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}
            onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <br />
                <button>Login</button>
                
            </form>
        </div>
    )
}

export default LoginPage
