import '../css/GameComponent.css'

const GameComponent = () => {
    const coll = ['', '', '']
    const row = ['', '', '']
  return (
    <div className="game-holder">
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
    </div>
  )
}

export default GameComponent