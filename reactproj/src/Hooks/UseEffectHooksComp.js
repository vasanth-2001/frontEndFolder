import React, { useEffect, useState } from 'react'

const UseEffectHooksComp = () => {
    const [age,setAge] = useState(18);
    const [sal,setSal] = useState(10000);
    // case 1: no dependencies  value passed
    // useEffect(()=>{
    //     setAge(age+1);
    // })

    //case 2 : when we pass dependencies value as blank array
    // useEffect(()=>{
    //     setAge(age+1);
    // },[])

    // case 3: when we have to execute useEffect hook as we want.
    useEffect(()=>{
        setAge(age+1);
    },[sal])
  return (
    <div>
        <div>UseEffectHooksComp</div>
        <p>Age is :{age}</p>
        <p>Salary is :{sal}</p>
        <button type='button' onClick={()=>setSal(sal+500)} className='btn btn-primary'>incrementSalAge</button>
    </div>
  )
}

export default UseEffectHooksComp