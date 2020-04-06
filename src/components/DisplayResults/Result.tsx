import React from 'react'
import './Result.css';

interface Props {
  data: number | undefined; 
  label: string;
}

const Result:React.FC<Props> = (props) => {
  return (
    <div className="Result-container">
      <h2 className="Result-number">{props.data}</h2>
      <h2>{props.label}</h2>
    </div>
  )
}

export default Result;