import React from 'react'

const UserComp = (props) => {
    if (props.user==="Arun") {
        throw Error("Not an user");
        
    }
  return (<div>

    <h2>User : <strong>{props.user}</strong></h2>
    </div>
  )
}

export default UserComp