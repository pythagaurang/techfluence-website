import React from 'react'


const Eventlist = (props) =>{
      return (
        <div className="left-align">
        <ol type="disc" >
        {props.rules.map((rule,index) => {
            return(
                console.log(rule),
                <li><p>{rule}</p></li>
        )})}
        </ol>
        </div>
      )
}

  
  export default Eventlist;