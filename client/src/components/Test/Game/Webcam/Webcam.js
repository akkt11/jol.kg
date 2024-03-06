import React from 'react'

const Webcam = ({ test_id }) => {

    const videoRef = React.useRef(null) // {current: null}
    const photoRef = React.useRef(null) // {current: null}

    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({
            video: {
                width: 500, height: 300
            }
        })
            .then(stream => {
                let video = videoRef.current
                video.srcObject = stream
                video.play()
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const takePhoto = () => {
        const width = 200
        const height = 100

        const video = videoRef.current
        const photo = photoRef.current
        photo.width = width
        photo.height = height

        let context = photo.getContext('2d')
        context.drawImage(video, 0, 0, width, height)

        const base64String = photo.toDataURL().split(',')[1]

        uploadImage(base64String)

    }

    const myHeaders = new Headers()

    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('token', localStorage.token)

    const uploadImage = async (base64) => {
        try {
            const body = { test_id, base64 }
            const response = await fetch('http://localhost:5000/test/images', {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(body)
            })
            console.log(response);
        } catch (error) {
            console.log(error.message);
        }
    }

    React.useEffect(() => {
        if (test_id) {
            let timerId = setInterval(() => takePhoto(), 10000);
            setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 18000000);
        }
    }, [test_id])

    React.useEffect(() => {
        getVideo()
    }, [videoRef])

    return (
        <>
            <div className='camera'>
                <video ref={videoRef}></video>
            </div>

            <div>
                <canvas ref={photoRef} hidden></canvas>
            </div>
        </>
    )
}

export default Webcam