import React from 'react'
import {
    MainContainer,
    MainBg,
    VideoBg,
    MainContent,
    MainH1,
    MainP,
    MainBtnWrapper,
    ArrowForward,
    ArrowRight
} from '../MainSection/MainSectionElements'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'


const MainSection = () => {

    const [hover, setHover] = React.useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <MainContainer id='main'>
            <MainBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </MainBg>

            <MainContent>
                <MainH1>Jol.kg поможет сдать экзамены с первой попытки</MainH1>
                <MainP>Онлайн тесты от создателей новых экзаменационных вопросов</MainP>
                <MainBtnWrapper>
                    <Button 
                    to='signup' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'>
                        К тестам! {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </MainBtnWrapper>
            </MainContent>
        </MainContainer>
    )
}

export default MainSection