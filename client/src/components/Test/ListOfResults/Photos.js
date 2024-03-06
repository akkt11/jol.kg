import React from 'react'

const Photos = ({ list }) => {

    const [images, setImages] = React.useState([])

    const getImages = async (test_id) => {
        try {
            const response = await fetch(`http://localhost:5000/test/images/${test_id}`, {
                method: 'GET',
                headers: { token: localStorage.token }
            })
            const parseRes = await response.json()
            setImages(parseRes)
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleShowImages = () => {
        getImages(list.test_id)
    }


    return (
        <>
            <button type="button" onClick={handleShowImages} className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${list.test_id}`}>
                Смотреть Фото
            </button>

            <div className="modal fade" id={`id${list.test_id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-dark" id="exampleModalLabel">Фотографии</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-dark">
                            <table>
                                <tbody>
                                    {images.map(image => (
                                        <tr key={image.image_id}>
                                            <td>
                                                <ul>
                                                    <li className='list-unstyled d-inline-flex'>
                                                        <img src={`data:image/png;base64,${image.base64}`} />
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Photos