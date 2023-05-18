import React from 'react'
import WatchCard from '../components/WatchCard/watchCard'
export default function Series() {
  return (
    <>
    <div className="flex flex-wrap justify-center items-center h-screen"> 
    <WatchCard description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} title={"Jenny's Wedding"} poster={"https://upload.wikimedia.org/wikipedia/en/c/c9/Jenny%27s_Wedding_Poster.jpg" } releaseDate={2013} />
   
</div>
   
    </>
  )
}
