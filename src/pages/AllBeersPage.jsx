import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function AllBeersPage() {
  const [beersData, setBeersData] = useState ([])
  
  const getData = async() => {
    try{
      const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
      // console.log(response)
      if (response.status === 200) {
      setBeersData(response.data)
      }else {
        console.error('error getting data', response)
      }
    } catch(err){
        console.error(err)
      }
  }
  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    console.log(beersData)
  }, [beersData])

  return (
    <div>
      <h1 className='text-3xl p-4 flex justify-center'>All beers page</h1>
      {beersData.length === 0 ? <p>Loading...</p> : 
      beersData.map((eachBeer) => {
        return (
          <div key={eachBeer.id} className='py-4'>
            <div className='card bg-gray-200 py-4'>
            <Link to={`/beers/${eachBeer._id}`}>
              <h2 className='text-2xl font-bold px-8 pb-4 underline underline-offset-2'>{eachBeer.name}</h2>
              <img src={eachBeer.image_url} alt='EachBeerImage' className='h-60 w-auto px-8' />
              <p className='text-lg py-2 px-8'>{eachBeer.tagline}</p>
              <p className='text-sm italic py-2 px-8'>{eachBeer.contributed_by}</p>
            </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
