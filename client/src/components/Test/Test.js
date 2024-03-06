import React from 'react'
import Game from './Game/Game'
import Join from './Join/Join'

const Test = ({ setAuth }) => {

    const [isQuizStarted, setIsQuizStarted] = React.useState(false)

  return (
    <>
        {isQuizStarted ? <Game retry={() => setIsQuizStarted(false)} setAuth={setAuth}/> : <Join start={() => setIsQuizStarted(true)} />}
    </>
  )
}

export default Test