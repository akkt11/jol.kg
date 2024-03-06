import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Results = ({ correct, test_id, questions, retry, setAuth }) => {

    const results = `${correct} правильных из ${questions.length}`

    const myHeaders = new Headers()

    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('token', localStorage.token)

    const createResults = async () => {
        try {
            const body = { test_id, results }
            const response = await fetch('http://localhost:5000/test/results', {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(body)
            })
            console.log(response);
        } catch (error) {
            console.log(error.message)
        }
    }

    const Logout = () => {
        try {
          localStorage.removeItem('token')
          window.location = '/'
          setAuth(false)
          toast.success('Logged out successfully!')
        } catch (error) {
          console.log(error.message)
        }
      }

    React.useEffect(() => {
        createResults()
    }, [])

    return (
        <>
            <div className='result'>
                <h1>Всего правильных ответов {correct} из {questions.length}</h1>
                <button className='button' onClick={retry}>Попробовать снова</button>
                <Link to='/listofresults' className='button'>Посмотреть результаты</Link>
                <Link className='button' onClick={Logout}>Выйти</Link>
            </div>
        </>
    )
}

export default Results