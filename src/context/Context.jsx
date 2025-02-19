import React from 'react'
import { createContext, useState } from "react";

export const Context = createContext()

export const GlobalContext = ({children}) => {
    const [openDriwer, setOpenDriwer] = useState(false)

    return(
        <Context.Provider value={{openDriwer, setOpenDriwer}}>{children}</Context.Provider>
    )
}