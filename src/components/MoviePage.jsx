import React, { useState } from 'react'
import { getRequest } from '../services/getRequest'
import MovieCard from './MovieCrad'
import { KEY } from '../hooks/GetEnv'
import { Pagination } from '@mui/material'
import MovieSkeleton from './MovieSkeleton'

const MoviePage = ({URL}) => {
  const [isLoading, setIsLoaing] = useState(true)
  const [page, setPage] = useState(1)
  const data = getRequest(`${URL}?language=en-US&page=${page}&key=${KEY}`, page, setIsLoaing)
  
  function handlePagination(value){
    setPage(value)
    setIsLoaing(true)
  }

  return (
    <>
    <div className=' p-5 flex items-center justify-center gap-10 flex-wrap mt-5'>
        {isLoading ?  <MovieSkeleton/> : data?.results?.map((item, index) => <MovieCard key={index} item={item}  />)}
    </div>
    <div className='flex items-center justify-center my-5'>
       <Pagination onChange={(a,b) => handlePagination(b)} count={data?.total_pages} color="primary" />
    </div>
    </>
  )
}

export default MoviePage