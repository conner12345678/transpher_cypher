import { useState, useEffect } from "react"
import GameComponent from "../components/GameComponent"

const Game = () => {
    const coll = [['', '', '']]
    const [data, setData] = useState(null)
    useEffect(() => {
      const fetchData = async () => {
          try{
              const response = await fetch('http://localhost:5000/users')
              const backendData = await response.json()
              setData(backendData)
          } catch(err) {
              console.error('Error:', err)
          }
      }

      fetchData()
  })
  console.log(data[0].theKey)
  return (
    <GameComponent coll={coll[0]}/>
  )
}

export default Game