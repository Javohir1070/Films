import React, { useContext } from 'react'
import { Context } from '../context/Context'

const getContext = () => {
    const {openDriwer, setOpenDriwer} = useContext(Context) 
    
  return {openDriwer, setOpenDriwer}
}

export default getContext