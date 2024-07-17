"use client"
import { appCtx } from '@/context/appContext';
import React, { useContext, useState } from 'react'

const B = () => {
  const [no2, setNo2] = useState();
  const { dispatch } = useContext(appCtx)
  const handleClick = () => {
    dispatch({
      type: "NO2_UPDATE",
      payload: no2
    })
  }
  return (
    <div>
      <h2>B</h2>
      <p>
        <b>No:1 <input onChange={(eve) => setNo2(eve.target.value)} /></b>
      </p>
      <p>
        <button onClick={handleClick}>Sum</button>
      </p>
    </div>
  )
}

export default B
