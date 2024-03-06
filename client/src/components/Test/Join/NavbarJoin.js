import React from 'react'
import { toast } from 'react-toastify'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarJoinElements'

const NavbarJoin = ({ setAuth }) => {

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

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            Jol.kg
          </NavLogo>

          <NavMenu>
            <NavItem>
              <NavLinks
                to='/'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>
                Главная</NavLinks>
            </NavItem>
          </NavMenu>

          <NavMenu>
            <NavItem>
              <NavLinks
                to='/listofresults'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>
                Результаты</NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink onClick={Logout}>Выйти</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default NavbarJoin