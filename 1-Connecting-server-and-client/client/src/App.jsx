import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [Data, setData] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('http://localhost:3009/') 
        setData(res.data.message)
        console.log(res.data)
      } catch (error) {
        console.error('Error fetching data:', error) 
      }
    })()
  }, [])

  return (
    <div>
      {
        Data && <>
        <h1>{Data}</h1>
        </>
      }
    </div>
  )
}

export default App