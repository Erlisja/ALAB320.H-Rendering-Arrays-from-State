import React from 'react'



function Score({ score }) {
  return (
    <li>
        <p>Date: {score.date} </p>
        <p>Score: {score.score}</p>

    </li>
  )
}

export default Score