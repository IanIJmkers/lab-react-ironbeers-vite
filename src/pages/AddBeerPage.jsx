import React, { useState } from 'react'

export default function AddBeerPage() {
  const [name, setName] = useState('')
  const [tagline, setTagline] = useState('')
  const [description, setDescription] = useState('')
  const [first_brewed, setFirstBrewed] = useState('')
  const [brewers_tips, setBrewersTips] = useState('')
  const [attenuation_level, setAttenuationLevel] = useState('')
  const [contributed_by, setContributedBy] = useState('')

  return (
    <div>
      <h1 className='text-2xl'> Create your own beer</h1>
      <form action="">
        <div>
          <label htmlFor="">Name:</label>
          <input type="text" value=''/>
        </div>

        <div>
          <label htmlFor="">Tagline:</label>
          <input type="text" value=''/>
        </div>

        <div>
          <label htmlFor="">Description:</label>
          <input type="text" value=''/>
        </div>

        <div>
          <label htmlFor="">First brewed:</label>
          <input type="text" value=''/>
        </div>

        <div>
          <label htmlFor="">Brewers tips:</label>
          <input type="text" value=''/>
        </div>

        <div>
          <label htmlFor="">Attenuation:</label>
          <input type="numbervalue=''" />
        </div>

        <div>
          <label htmlFor="">Contributed by:</label>
          <input type="text" value=''/>
        </div>

        <button type="submit">Create!</button>
      </form>
    </div>
  )
}

