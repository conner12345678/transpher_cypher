import '../css/GameComponent.css'
import { useState, useEffect } from 'react'

const GameComponent = ({ coll }) => {
    const row = ['', '', '']
    const [minuts, setMinuts] = useState(3)
    const [seconds, setSeconds] = useState(0)
    const handleKey = async()=>{
        let key = await fetch('https://localhost:5000/users', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
    }
    useEffect(() => {
        const timer = setInterval(() => {
            if(seconds > 0){
                setSeconds(seconds - 1)
            }
            else{
                setSeconds(59)
                setMinuts(minuts - 1)
                if(minuts === 0 && seconds === 0){
                    alert('Game Over')
                }
            }
        }, 1000)
        return () => clearInterval(timer)
    })

  return (
    <div className="game-holder">
        {seconds < 10 ? <h1 className='timer'>{minuts+':0'+seconds}</h1> : <h1 className='timer'>{minuts+':'+seconds}</h1>}
        <div className="grid-content">
            {coll.map((col, i) => (
                coll.length === 3 ? <div className='text' style={{flex: '30%'}}><p>{i+1}</p></div> : coll.length === 4 ? <div className='text' style={{flex: '23%'}}><p>{i+1}</p></div> : <div className='text' style={{flex: '18%'}}><p>{i+1}</p></div>
            ))}
            {coll.map((col) => (
                row.map((ro) => (
                    coll.length === 3 ? <div className="cell" style={{flex: '30%'}}></div> : coll.length === 4 ? <div className="cell" style={{flex: '23%'}}></div> : <div className="cell" style={{flex: '18%'}}></div>
                ))
            ))}
        </div>
        <div className='info'>
            <div className='key'>Key: {handleKey()}</div>
            <div className='cipher-text'>ciphered text: </div>
            <div className='score'>
            <div className='points'>Score</div>
        </div>
        </div>
        <div className='answer-area'>
            <input type="text" placeholder='Answer here:'/>
            <button>Submit</button>
        </div>
    </div>
  )
}

export default GameComponent