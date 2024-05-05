import React from 'react'
import Button from './Button'
import '../components/calwrapper.scss'

const Calwrapper = (props) => {

  const adnan = props.btn.map((btn)=>{
    // console.log(i);
    return <Button key={btn.value} btn={btn.value} btnclick={btn.btnclick} />
  })

  const sheikh = props.btnoperator.map((btn)=>{
    // console.log(i);
    return <Button key={btn.value} btn={btn.value} btnclick={btn.btnclick} />
  })
  // console.log(adnan);

  return (
    <div className='main-cal'>
      
      <div className='bt-name'>{adnan}</div>
      <div className='bt-operator'>{sheikh}</div>
     
    </div>
  )
}

export default Calwrapper