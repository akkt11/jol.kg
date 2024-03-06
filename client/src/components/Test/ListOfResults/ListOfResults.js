import React from 'react'
import Navbar from '../Navbar/Navbar'
import Photos from './Photos'
import './ListOfResults.scss'

const ListOfResults = ({ setAuth }) => {

    const [lists, setLists] = React.useState([])

    const getResults = async () => {
        try {
            const response = await fetch('http://localhost:5000/test/results', {
                method: 'GET',
                headers: { token: localStorage.token }
            })
            const parseRes = await response.json()
            setLists(parseRes)
        } catch (error) {
            console.log(error.message)
        }
    }

    const deleteResult = async (id) => {
        const response = await fetch(`http://localhost:5000/test/results/${id}`, {
            method: 'DELETE',
            headers: { token: localStorage.token }
        })
        setLists((lists.filter(list => list.result_id !== id)))
    }

    React.useEffect(() => {
        getResults()
    }, [])

    return (
        <>
            <Navbar setAuth={setAuth} />
            <div className='list-container'>
                <table className='table table-dark table-hover'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Статус</th>
                            <th>Результат</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {lists.map(list => (
                            <tr key={list.result_id}>
                                <td>
                                    <p>{list.result_id}</p>
                                </td>

                                <td>
                                    <p>Прошли</p>
                                </td>

                                <td>
                                    {list.results}
                                </td>

                                <td>
                                    <Photos list={list} />
                                </td>

                                <td>
                                    <button className='btn btn-danger' onClick={() => deleteResult(list.result_id)}>Удалить</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListOfResults