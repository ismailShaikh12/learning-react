import React, { useState, useContext } from 'react'
import UserContext from '../Context/Usercontext'

function Login() {
    const [username, setUsername] = useState('')
    const [userpass, setUserpass] = useState('')

    const { setUser } = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, userpass })
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username' />
            <input type="text"
                value={userpass}
                onChange={(e) => setUserpass(e.target.value)}
                placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login