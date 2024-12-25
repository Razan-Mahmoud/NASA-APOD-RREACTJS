import React from 'react'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'

export default function SideBar(props) {
  const { handleToggleModal, data } = props
  const iconRight = <FontAwesomeIcon icon={faRightLong} />

  return (
    <div className='sideBar'>
      <div onClick={handleToggleModal} className='bgOverlay'></div>
      <div className='sideBarContents'>
        <h1>{data?.title}</h1>
        <div className='descriptionContainer'>

        <p>{data?.date}</p>
        <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>{iconRight}</button>
      </div>
    </div>

  )
}
