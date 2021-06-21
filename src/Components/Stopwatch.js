import React from 'react'
import '../App.css'

const Stopwatch = ({ minutes, seconds }) => (
  <h1>
    {minutes > 9 ? minutes : `0${minutes}`}:
    {seconds > 9 ? seconds : `0${seconds}`}
  </h1>
)

export default Stopwatch
