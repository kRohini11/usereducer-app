"use client"

import { appCtx } from '@/context/appContext';
import React, { useContext, useState } from 'react'


const A = () => {
    const [no1, setNo1] = useState();
    const { dispatch } = useContext(appCtx)
    const handleClick = () => {
        dispatch({
            type:"No1_UPDATE",
            payload:no1
        })
    }
    return (
        <div>
            <h2>A</h2>
            <p>
                <b>No1: <input onChange={(eve) => setNo1(eve.target.value)} /></b>
            </p>
            <p>
                <button onClick={handleClick}>Sum</button>
            </p>
        </div>
    )
}

export default A
