"use client"
import { appCtx } from '@/context/appContext'
import React, { useContext } from 'react'

const C = () => {
  const { state } = useContext(appCtx);
  const {no1,no2}=state
  return (
    <div>
      <h2>C</h2>
      <h1>No1:{no1}</h1>
      <h1>No2:{no2}</h1>
      <h1>Sum:{Number(no1)+Number(no2)}</h1>

    </div>
  )
}

export default C
