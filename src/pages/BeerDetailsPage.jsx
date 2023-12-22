import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function BeerDetailsPage() {
  const {beerId}=useParams()
  // console.log(beerId)
  const [beerData, setBeerData] = useState()

  const getData = async() => {
    try {
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
      if (response.status === 200) {
        setBeerData(response.data)
        }else {
          console.error('error getting data')
        }
      } catch(err){
          console.error(err)
        }
    }

  
    useEffect(() => {
      if (beerId) {
        getData();
      }
    }, [beerId]);

useEffect(() => {
  console.log(beerData)
}, [beerData])

  return (
    <div>
      <h1>Beer details</h1>
      {!beerData ? <p>Loading...</p> :
      <div>
        <h2>{beerData.name}</h2>
        <img src ={beerData.image_url} alt="" />
        <p>{beerData.tagline}</p>
        <p>{beerData.contributed_by}</p>
      </div>}
    </div>
  )
}
