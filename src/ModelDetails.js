import * as React from 'react'

export default function ModelDetails(props) {

  return(
    <div>
      <ul>
        <li>Name: {props.modelSpecs.name}</li>
        <li>Manufacturer: {props.modelSpecs.manufacturer}</li>
        <li>Year: {props.modelSpecs.year}</li>
        <li>Origin: {props.modelSpecs.origin}</li>
      </ul>
    </div>
  )
}

