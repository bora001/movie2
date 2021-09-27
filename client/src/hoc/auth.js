import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { authUser } from '../_actions/user_action'

export default function (SpecificComponent, option, adminRoute = null) {

    function AuthCheck(props) {

        const dispatch = useDispatch();
        
        useEffect(() => {
            dispatch(authUser())
                .then(function (response) {
                        console.log("dispatch",response)
                    if (!response.payload.isAuth) {
                        //no login
                        if (option) {
                            props.history.push('/')
                        }
                    } else {
                        // did login
                        if (adminRoute && !response.payload.isAdmin) {
                            //not admin
                            props.history.push('/')
                        } else {
                            if (option === false) {
                                props.history.push('/')
                            }
                        }
                    }
                })
                // .then(response => {
                //     console.log("response",response)
                //     if (!response.payload.isAuth) {
                //         //no login
                //         if (option) {
                //             props.history.push('/')
                //         }
                //     } else {
                //         // did login
                //         if (adminRoute && !response.payload.isAdmin) {
                //             //not admin
                //             props.history.push('/')
                //         } else {
                //             if (option === false) {
                //                 props.history.push('/')
                //             }
                //         }
                //     }
                // })
        }, [])
           
            return (
                <SpecificComponent />
            )
    }

    return AuthCheck
}
