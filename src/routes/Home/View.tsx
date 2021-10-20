import React, { FC } from 'react'
import {useLocation} from 'react-router-dom'

const HomeView: FC = () => { 
  const {pathname} = useLocation() 
  console.log({pathname})

  return (
  <p>
    Home
  </p>
)} 

export default HomeView
