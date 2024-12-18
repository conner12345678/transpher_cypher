import GameComponent from "../components/GameComponent"

const Game = () => {
    const coll = [['', '', '']]
  return (
    <GameComponent coll={coll[0]}/>
  )
}

export default Game