import React from 'react'
import { useState } from 'react'

const FormValComp = () => {
    let mycourses =["React","Java","Angular","Python","DotNet"];
    const [user,setUser] = useState({
        fname : "",
        term :false,
        course:""
    })
    const changeInput = (event)=>{
        // console.log(event.target.type);
        // console.log(event.target.name);
        // console.log(event.target.value);
        const {type,name,value,checked} = event.target;
            setUser({...user,[name]:type==="checkbox"? checked:value});
        }
        const checkData=(event)=>{
            event.preventDefault();
            if(user.fname.trim()===""){
                window.alert("fname is required");
                return false;
            }
            if(!user.fname.trim().match("^[a-zA-Z ]{3,20}$")){
                window.alert("fullname must contain only character min-3 and max-20");
                return false;
            }
            if (user.course==="") {
                window.alert("course field is required");
                return false;
            }
            if(user.term===false){
                window.alert("please accept term and condition");
                return false;
            }
            window.alert(JSON.stringify(user));
        }

    
  return (
    <div>
        <div>This is Form Validition Component</div>
        <form onSubmit={checkData}>
            <div>
            <label>Enter your First Name :</label>
            <input type='text' name='fname' onChange={changeInput} value={user.fname}/>
            </div>
            <div>
                <label>Select your Courses</label>
                <select name='course' onChange={changeInput}>
                    <option value="">select your course</option>
                    {
                        mycourses.map((val,index)=>{
                            return <option value={val} key={index}>{val}</option>
                        })
                    }
                </select>
            </div>
            <div>
            <input type='checkbox' name='term' onChange={changeInput} value={user.term}/>Accept terms and condition
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormValComp