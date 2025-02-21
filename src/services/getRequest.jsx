import { useEffect, useState } from "react"
import { instance } from "../hooks/instance"


export const getRequest = (API, refresh, setIsLoaing) => {
    const [data, setData] = useState({})

    useEffect(() => {
        instance().get(API).then(res => {
            setData(res.data)
            setIsLoaing(false)
        })
    },[refresh])

    return data
}