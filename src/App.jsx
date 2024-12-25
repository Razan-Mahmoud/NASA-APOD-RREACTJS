import React, { useEffect, useState } from 'react'
import SideBar from './assets/Components/SideBar'
import Main from './assets/Components/Main'
import Footer from './assets/Components/Footer'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false);
  const spinnerIcon = <FontAwesomeIcon icon={faSpinner} spin />

  function handleToggleModal() {
    setShowModal(!showModal)
  }

  //  const localKey = localStorage.getItem("apiData")

  async function fetchData() {
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

    const today = (new Date()).toDateString()
    const localKey = `NASA-${today}`
    if (localStorage.getItem(localKey)) {
      const apiData = JSON.parse(localStorage.getItem(localKey));
      setData(apiData)
      console.log("Fetched from cache today")
      return
    }
    localStorage.clear()


    try {
      const response = await fetch(url);
      const apiData = await response.json()
      console.log("Fetched from API today")

      localStorage.setItem(localKey, JSON.stringify(apiData));

      setData(apiData)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      {showModal && (<SideBar data={data} handleToggleModal={handleToggleModal} />)}
      {data ? (<Main data={data} />) :
        (<div className='spinnerIcon'>{spinnerIcon}</div>)}
      {data && (<Footer data={data} handleToggleModal={handleToggleModal} />)}
    </>
  )
}
// cash data 01:38 from video