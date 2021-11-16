import { Link } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";

import React, {useState} from 'react'
import styled from 'styled-components'

const SectionWrapper = styled.section`
  height: 120px;
  background-color:${({theme})=>theme.colors.bgBlackVersion2};

  display: flex;
`

const SectionContentWidth = styled.div`
  @media (min-width:1024px) {
    max-width: 960px;
    margin: auto;
  }

  @media(min-width:1440px ){
    max-width: 1320px;
    margin: auto;
  }
`

const NavDesktopWrapper = styled(SectionContentWidth)`
  display: none;
  
  @media (min-width:1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
`

const NavMobileWrapper = styled.div`
  position: fixed;
  z-index: 2;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  background-color:${({theme})=>theme.colors.bgBlackVersion2};

  padding: 0 1rem;
  height: 100px;

  @media(min-width: 1024px) {
    display: none;
  }
`

const NavMobileContentContainer = styled.div`
  position: fixed;
  z-index: 2;
  left: ${({isOpen})=>(isOpen ? "0" :  "-100%")};

  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.3);
  transition: 350ms;
`
const NavMobileMenu = styled.div`
  position: absolute;
  
  width: 95%;
  min-height: 100vh;
  background-color: #27272E;
  padding: 20px;
  
  box-sizing: border-box;
  transition: all 0.8s cubic-bezier(0.77, 0.2, 0.05, 1);
`
const NavDesktopLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, max-content);
  column-gap: 2rem;
  justify-self: end;

  a {
    text-decoration: none;
  }
`
const NavMobileMenuHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  padding-bottom: 1rem;
  border-bottom: 1px solid #525260;  
`
const NavMobileLinksWrapper = styled.div`
  display: grid;

  a{
    height: 50px;
    line-height: 50px;
    text-decoration: none;
    border-bottom: 1px solid #525260;
  }
`
const CompanyLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: .5rem;

  cursor: pointer;
  
  h4 {
    color: white;
  }
`
const CompanyImageWrapper = styled.div`
  box-sizing: border-box;
  padding: .5rem;

  width: 60px;
  height: 60px;
  border-radius: 15px;
  background-color: ${({theme}) => theme.colors.white};

  img {
    width: 100%;
  }
  p{
    font-weight: 500;
  }
`
const CloseIconWrapper = styled.div`
  justify-self: end;

  box-sizing: border-box;
  padding: .5rem;

  width: 30px;
  height: 30px;
  border-radius: 10px;
  background-color: #ffffff;

  img {
    width: 100%;
  }
`

const HamburgerIconWrapper = styled.div`
  justify-self: end;

  box-sizing: border-box;
  padding: 1rem;

  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #525260;

  img {
    width: 100%;
  }  justify-self: end;

box-sizing: border-box;
padding: 1rem;

width: 60px;
height: 60px;
border-radius: 50%;
background-color: #525260;

img {
  width: 100%;
}
`
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <SectionWrapper>
      <NavMobileWrapper>
        <CompanyLogoWrapper>
          <CompanyImageWrapper>
            <img src="./tc-logo.png" alt="treeclouds" />
          </CompanyImageWrapper>
          <p>TREECLOUDS</p>
        </CompanyLogoWrapper>
        <HamburgerIconWrapper onClick={()=> setIsOpen(!isOpen)}>
          <img src="./hamburger-icon.svg" alt="hamburger icon" />
        </HamburgerIconWrapper>
      </NavMobileWrapper>
      {/* Inside Navbar mobile */}
      <NavMobileContentContainer isOpen={isOpen}>
        <NavMobileMenu>
          <NavMobileMenuHeader>
            <CompanyLogoWrapper>
              <CompanyImageWrapper>
                <img src="./tc-logo.png" alt="treeclouds" />
              </CompanyImageWrapper>
              <h4>Treeclouds</h4>
            </CompanyLogoWrapper>
            <CloseIconWrapper onClick={()=> setIsOpen(!isOpen)}>
              <img src="./close-icon.png" alt="close icon" />
            </CloseIconWrapper>
          </NavMobileMenuHeader>
          <NavMobileLinksWrapper>
            <AnchorLink to="#service-section">Services</AnchorLink>
            <AnchorLink to="#about-section">About Us</AnchorLink>
            <AnchorLink to="#case-study-section">Featured Case Study</AnchorLink>
            <AnchorLink to="#client-section">Our Clients</AnchorLink>
            <AnchorLink to="#cta-section">Work With Us</AnchorLink>
          </NavMobileLinksWrapper>
        </NavMobileMenu>
      </NavMobileContentContainer>
      <NavDesktopWrapper>
        <CompanyLogoWrapper>
          <CompanyImageWrapper>
            <img src="./tc-logo.png" alt="treeclouds" />
          </CompanyImageWrapper>
          <p>TREECLOUDS</p>
        </CompanyLogoWrapper>
        <NavDesktopLinksWrapper>
          <AnchorLink to="#service-section">Services</AnchorLink>
          <AnchorLink to="#about-section">About Us</AnchorLink>
          <AnchorLink to="#case-study-section">Featured Case Study</AnchorLink>
          <AnchorLink to="#client-section">Our Clients</AnchorLink>
          <AnchorLink to="#cta-section">Work With Us</AnchorLink>
        </NavDesktopLinksWrapper>
      </NavDesktopWrapper>
    </SectionWrapper>
  )
}

export default Navbar;