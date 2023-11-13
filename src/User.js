import React from "react";
const User=(props)=>{
    const {data}=props;
    return(
        <div>
            <h1>USer component</h1>
            <h2>Name:-{data.name}</h2>
            <h3>Age:-{data.age}</h3>
        </div>
    )
}
export default User;