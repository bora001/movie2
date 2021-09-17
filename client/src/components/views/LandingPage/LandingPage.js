import React, {useEffect} from 'react'
import axios from 'axios'

function LandingPage(props) {

    useEffect(() => {
        axios.get('/api/hello')
            .then(response => { console.log(response)})
    }, [])
    
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
    return (
        <div>
            Landdding 랜딩
            <button onClick={onLogoutHandler}>로그아웃</button>
        </div>
    )
}

export default LandingPage