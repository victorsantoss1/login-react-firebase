import { useState, useEffect } from "react"

import { auth } from "../firebaseConnections"
import { onAuthStateChanged } from "firebase/auth"
import { Navigate } from "react-router-dom"


export default function Private({children}){
    const [loading,setLoading] =useState(true)
    const [singned,setSinged] =useState(false)

    useEffect(()=>{
        async function checkLogin() {
            const unsub = onAuthStateChanged(auth,(user) =>{
                if(user){
                    const userData={
                        uid: user.uid,
                        email: user.email,
                    }

                    localStorage.setItem("@detailUser", JSON.stringify(userData))

                    setLoading(false)
                    setSinged(true)

                }else{
                    setLoading(false)
                    setSinged(false)
                }
            })
            
        }
        checkLogin()

    }, [])

    if(loading){
        return(
            <div></div>
        )
    }

    if(!singned){
        return <Navigate to="/"></Navigate>

    }


    return children
}