import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import "./LandingPage.css"
let status = {
        loginStatus:false
    };

function LandingPage(props) {

    useEffect(() => {
        axios.get(`/api/users/auth`)
            .then(response => {
                if (response.data.isAuth) {
                    status.loginStatus = true
                } else {
                    status.loginStatus = false
                }
            })
    })
        
                    
    // useEffect(() => {
    //     axios.get('/api/hello')
    //         .then(response => { console.log(response)})
    // }, [])
    
    const onLogoutHandler = () => {
        axios.get(`/api/users/logout`)
        .then(response => {
            if (response.data.success) {
                props.history.push("/login")
            } else {
                alert("failed to logout")
            }
        })
    }

    // console.log(response)

    return (
        <div className="landing_page">
            <h2>Thank you for visiting !</h2>
            <div className="btn_box">
                {status.loginStatus ? <button onClick={onLogoutHandler}>LOGOUT</button>
                    : <div >
                        <button><a href="/register">REGISTER</a></button>
                        <button><a href="/login">LOGIN</a></button>
                    </div>}
            </div>
        </div>
    )
}

export default withRouter(LandingPage)