import { useState } from 'react'
import classes from './Counter.module.scss'

const Counter = () => {

    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter + 1)
    }
  return (
    <>
    <div>
      <h1>{counter}</h1>
      <button onClick={increment} className={classes.btn}>Increment</button>
    </div>
    </>
  )
}

export default Counter  