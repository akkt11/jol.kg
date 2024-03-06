import React from 'react'
import { 
    FaInstagram, 
    FaTwitter, 
    FaWhatsapp, 
    FaLinkedin } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Контакты
                            </FooterLinkTitle>

                            <FooterLink to='/signin'>
                                (+996) 708 632 227
                            </FooterLink>

                            <FooterLink to='/signin'>
                                jolkginfo@gmail.com
                            </FooterLink>

                            <FooterLink to='/signin'>
                                Ул. Учкун
                            </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Данные
                            </FooterLinkTitle>

                            <FooterLink to='/signin'>
                                О нас
                            </FooterLink>

                            <FooterLink to='/signin'>
                                Отзывы
                            </FooterLink>

                            <FooterLink to='/signin'>
                                Тех.поддержка
                            </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            jol.kg
                        </SocialLogo>

                        <WebsiteRights>
                            jol.kg © {new Date().getFullYear()}
                            Все права защищены
                        </WebsiteRights>

                        <SocialIcons>
                            <SocialIconLink 
                            href='//www.instagram.com' 
                            target='_blank' 
                            aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>

                            <SocialIconLink 
                            href='//www.whatsapp.com' 
                            target='_blank' 
                            aria-label='Whatsapp'>
                                <FaWhatsapp />
                            </SocialIconLink>

                            <SocialIconLink 
                            href='//www.twitter.com' 
                            target='_blank' 
                            aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>

                            <SocialIconLink 
                            href='//www.linkedin.com' 
                            target='_blank' 
                            aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer