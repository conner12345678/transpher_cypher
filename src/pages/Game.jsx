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
  return (
    <GameComponent coll={data ? data[0].coll : ['', '', '']} word={data ? data[0].word : 'loading'} cipherWord={data ? data[0].cipherWord : 'loading'} theKey={data ? data[0].theKey : 'loading'}/>
  )
}

export default Game