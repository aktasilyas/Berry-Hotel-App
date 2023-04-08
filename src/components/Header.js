import React from 'react'
import { Row } from 'reactstrap'
import * as Icon from 'react-feather';
const Header = () => {
  return (
    <div className='w-100 bg-primary p-4 text-white d-flex justify-content-start align-items-center'>
         <Icon.Award size={25}/>
        <h4 className='text-center'>Berry Hotel</h4>
    </div>
  )
}

export default Header