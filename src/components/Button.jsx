import React from 'react'
import '../components/button.scss'

const Button = (props) => {
  return (

      <button onClick={props.btnclick} className='btn-val' > {props.btn}</button>
    
  )
}

export default Button