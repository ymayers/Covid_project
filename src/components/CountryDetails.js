import React from 'react'

function CountryDetails(props) {
  console.log(props.cases)
  return (
  <div>
    {props.cases}
    </div>
  )
}

export default CountryDetails


