import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import AlbumData from './AlbumData'
import { albumsData } from '../assets/assets';

function Display() {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
   const albumId = isAlbum ? location.pathname.slice(-1) : "";
   
   const bgColor = albumsData[Number(albumId)].bgColor;

   useEffect(()=>{
      if (isAlbum) {
        displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`

      }
      else {
         displayRef.current.style.background =  `#121212`
      }
   })

  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white oveflow-auto lg:w-[]75% lg:ml-0'>
        <Routes>
            <Route path='/' element={<Home/>}>
            </Route>
            <Route path='/album/:id' element={<AlbumData/>}>
            </Route>
        </Routes>
    </div>
  )
}

export default Display