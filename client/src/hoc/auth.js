import React, { useEffect } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { authUser } from '../_actions/user_action'

export default function (SpecificComponent, option, adminRoute = null) {

    function AuthCheck(props) {

        const dispatch = useDispatch();
        
        useEffect(() => {
            dispatch(authUser())
                .then(response => {
                console.log(response)
                })

        }, [])
           
            return (
                <SpecificComponent />
            )
    }

    return AuthCheck
}
