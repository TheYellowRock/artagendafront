import React from 'react'

export default function Filmography({actor}:{actor:any}) {
  return (
    <div className='w-full bg-white'>
      <div className='w-full flex justify-center uppercase font-roboto text-3xl py-10 text-darkBlack'>Filmografia</div>
      <div className='w-4/5 mx-auto flex flex-col pb-10'>
        {actor.filmography.map((film:any) =>(
            <div key={film.id} className='grid grid-cols-5 py-2 border-b-2 border-lightGrey'>
                <div className='font-roboto pl-8' >{film.year}</div>
                <div className='font-roboto col-span-2'>{film.work}</div>
                <div className='font-roboto col-span-2'>{film.role}</div>
            </div>
         ))}
      </div>
    </div>
  )
}
