// import React, { Component } from 'react'

// class CountryDetails extends Component {
//   constructor(props) {
//     super(props)
// const cases = props.match.params.TotalConfirmed

//   }


//   render() {
//     return (
//       <p>{cases}</p>
//     )
//   }
// }

// export default CountryDetails

import React from 'react'



const CountryDetails = (props) => {
  console.log(props)
  return (
    
      <div className="cases">
    <div className="country-name">
      {props.children}
    </div>
        <div className="number-cases">{props.cases}</div>
        </div>
     
  )
}

export default CountryDetails

