import React from 'react'
import { Button } from '../ButtonElement'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrapper,
    ImgWrap,
    Img,
} from './InfoElements'

const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    headLine,
    primary,
    dark,
     }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    {topLine}
                                </TopLine>

                                <Heading lightText={lightText}>
                                    {headLine}
                                </Heading>

                                <Subtitle darkText={darkText}>
                                    {description}
                                </Subtitle>

                                <BtnWrapper>
                                    <Button to='/signup'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact='true'
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark ? 1 : 0}>
                                        {buttonLabel}
                                    </Button>
                                </BtnWrapper>
                            </TextWrapper>
                        </Column1>

                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection