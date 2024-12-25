import React from 'react'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'


export default function Footer(props) {
    const {handleToggleModal, data} = props
    const infoIcon = <FontAwesomeIcon icon={faCircleInfo} />
  return (
    <div className='footer'>
        <div className='bgGradient'></div>
        <div className='footerContents'>
        <h2>APOD Project</h2>
        <h1>{data?.title}</h1>
        </div>

<button onClick={handleToggleModal}>{infoIcon}</button>
        
    </div>
  )
}
