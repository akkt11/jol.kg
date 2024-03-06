import React from 'react'
import NavbarJoin from './NavbarJoin'
import './JoinElements.scss'

const Join = ({ start }) => {

  const myHeaders = new Headers()

  myHeaders.append('Content-Type', 'application/json')
  myHeaders.append('token', localStorage.token)

  const createTest = async() => {
    try {
      const response = await fetch('http://localhost:5000/test/tests', {
        method: 'POST',
        headers: myHeaders
      })
      start()
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
        <NavbarJoin />
        <div className='join-container'>
            <h1>Тест по ПДД</h1>
            <p>Тест состоит из 20 вопросов по длительности 30 мин
               из которых будут состоять категории A,B,C,D.<br></br>
               По мере прохождения теста каждые 10 секунд
               вас будут снимать для предотвращении жульничества<br></br>
               Удачи!
            </p>
        <button className='btn btn-success' onClick={() => createTest()}>Начать!</button>
        </div>
    </>
  )
}

export default Join