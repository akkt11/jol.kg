import Webcam from "../Webcam/Webcam"
import Timer from '../Timer/Timer'

const Play = ({ step, question, onClickVariant, questions, test_id}) => {

    const percentage = Math.round((step / questions.length) * 100)

    return (
        <>
            <div className="progress">
                <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
            </div>

            <h1>{question.title}</h1>

            <div className='test'>
                <ul>
                    {question.variants.map((text, index) => (
                        <li key={text} onClick={() => onClickVariant(index)}>
                            {text}
                        </li>
                    ))}
                </ul>
                <div className='webcam'>
                    <Webcam test_id={test_id}/>
                    <Timer />
                </div>
            </div>

        </>
    )
}

export default Play