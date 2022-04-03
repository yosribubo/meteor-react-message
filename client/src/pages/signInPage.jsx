import React, { useState } from 'react'
import { Meteor } from 'meteor/meteor'

import 'bootstrap/dist/css/bootstrap.css'
import '../../main.css'

const SignInPage = () => {

    // Form fields states
    const [userEmail, setUserEmail] = useState('')
    const [userPwd, setUserPwd] = useState('')

    const handleLogin = async e => {
        e.preventDefault()

        if (userEmail === '' || userPwd === '') return console.log('Please type all required data')

        Meteor.loginWithPassword(userEmail, userPwd, async err => {
            if (err) return console.log('Login error:', err)
            // TODO: go to messagelist
            console.log('Login Ok')
            return window.location.href='/messagelist'
        })
    }

    return (
        <div className="login-form mx-auto mt-5">
            <div className="container">
                <h2 className='login-title'>Sign In</h2>
                <form onSubmit={handleLogin}>
                    <div className='form-group'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" className='form-control' 
                            id="userEmail" 
                            name="userEmail"
                            placeholder='Enter Email'
                            value={ userEmail }
                            required
                            onChange={ e => setUserEmail(e.target.value) }
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className='form-control' 
                            id="userPwd"
                            name="userPwd" 
                            placeholder="Enter Password"
                            value={ userPwd }
                            required
                            onChange={ e => setUserPwd(e.target.value) }
                        />
                    </div>
                    <button type="submit" className='btn btn-primary mx-auto'>Sign In</button>
                    <div className='form-group'>
                        <a href="/signUp">It is my first access</a>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default SignInPage