import React, { useState } from 'react'
import Calwrapper from './Calwrapper'
import '../components/cal.scss'


const Cal = () => {

  const [inputval, setinputval] = useState(0);
  const [operatrvalue, setoperatorvalue] = useState(0);
  const [operator, setoprator] = useState('');

  const btn = [
    {
      value: 0,
      btnclick: ()=> {setinputval((preval)=>parseInt(preval.toString() + 0)
      );} 
    },
    {
      value: 1,
      btnclick: ()=> {setinputval((preval)=>parseInt(preval.toString() + 1)
      );} 
    },
    {
      value: 2,
      btnclick: ()=> {setinputval((preval)=>parseInt(preval.toString() + 2)
      );} 
    },
    {
      value: 3,
      btnclick: ()=> {setinputval((preval)=>parseInt(preval.toString() + 3)
      );} 
    },
    {
      value: 4,
      btnclick: ()=> {setinputval((preval)=>parseInt(preval.toString() + 4)
      );} 
    },
    {
      value: 5,
      btnclick: ()=> {setinputval((preval)=>parseInt(preval.toString() + 5)
      );} 
    },
    {
      value: 6,
      btnclick: ()=> {setinputval((preval)=>parseInt(preval.toString() + 6)
      );} 
    },
    {
      value: 7,
      btnclick: ()=> {setinputval((preval)=>parseInt(preval.toString() + 7)
      );} 
    },
    {
      value: 8,
      btnclick: ()=> {setinputval((preval)=>parseInt(preval.toString() + 8)
      );} 
    },
    {
      value: 9,
      btnclick: ()=> {setinputval((preval)=>parseInt(preval.toString() + 9)
      );} 
    },
    
    
  ];

  const btnoperator = [
    {
      value: 'AC',
      btnclick: ()=>{
        setinputval(0);
        setoperatorvalue(0);
        setoprator('');
      }
    },
    {
      value: '+',
      btnclick: () => {
        setoprator('+');
        setoperatorvalue(inputval);
        setinputval(0);
      }
    },
    {
      value: '-',
      btnclick: () => {
        setoprator('-');
        setoperatorvalue(inputval);
        setinputval(0);
      }
    },
    {
      value: '*',
      btnclick: ()=>{
        setoprator('*');
        setoperatorvalue(inputval);
        setinputval(0);
      }
    },
    {
      value: '/',
      btnclick: ()=>{
        setoprator('/');
        setoperatorvalue(inputval);
        setinputval(0);         
      }
    },
    {
      value: '=',
      btnclick: ()=> {
        if(operator === '+'){
          setinputval(operatrvalue + inputval);
        }
        else if(operator === '-'){
          setinputval(operatrvalue - inputval);
        }
        else if(operator === '*'){
          setinputval(operatrvalue * inputval);
        }
        else if(operator === '/'){
          setinputval(operatrvalue / inputval);
        }
      }
    },
    
  ]




  return (
    <div className='main'>
      <div className="submain">
      
      
      
      <p className=''>{operatrvalue === 0 ? '' : operatrvalue}<span>{operator}</span></p>
      <p>{inputval}</p>
      </div>
      <Calwrapper btn={btn} btnoperator={btnoperator} />
    </div>
  )
}

export default Cal