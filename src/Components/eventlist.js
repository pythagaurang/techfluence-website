import React from 'react'


const Eventlist = (props) =>{
      return (
        <div >
        <ul type="disc" >
        {props.rules.map((rule,index) => {
            return(
                console.log(rule),
                <li><p>{rule}</p></li>
        )})}
        </ul>
        </div>
      )
}

  
  export default Eventlist;