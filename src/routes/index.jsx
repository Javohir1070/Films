import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageRoutes } from '../hooks/routes'

const FilmRoutes = () => {
  return (
    <Routes>
        {PageRoutes.map(item => <Route key={item.id} path={item.path} element={item.element}/>)}
    </Routes>
  )
}

export default FilmRoutes