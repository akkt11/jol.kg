import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarBtnWrap,
    SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, openTrigger }) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={openTrigger}>
                <CloseIcon/>
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='main' onClick={openTrigger}>
                        Главное
                    </SidebarLink>

                    <SidebarLink to='about' onClick={openTrigger}>
                        О нас
                    </SidebarLink>

                    <SidebarLink to='signup' onClick={openTrigger}>
                        Регистрация
                    </SidebarLink>
                </SidebarMenu>

                <SidebarBtnWrap>
                    <SidebarRoute to='/signin'>Войти</SidebarRoute>
                </SidebarBtnWrap>

            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar