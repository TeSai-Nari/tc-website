import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const SectionWrapper = styled.section`
  height: 120px;
  background-color:${({theme})=>theme.colors.bgBlackVersion2};

  display: flex;
`

const SectionContentWidth = styled.div`
  max-width: 960px;
  margin: auto;
  /* For desktop */
  /* max-width: 1320px;
  margin: auto; */
`

const NavDesktopWrapper = styled(SectionContentWidth)`
  display: none;
  
  @media (min-width:1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
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
const CompanyLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: .5rem;

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
export default function Navbar() {
  return (
    <SectionWrapper>
      <NavDesktopWrapper>
        <CompanyLogoWrapper>
          <CompanyImageWrapper>
            <img src="./tc-logo.png" alt="treeclouds" />
          </CompanyImageWrapper>
          <p>TREECLOUDS</p>
        </CompanyLogoWrapper>
        <NavDesktopLinksWrapper>
          <Link to="#service">Services</Link>
          <Link to="#about">About Us</Link>
          <Link to="#case-study">Featured Case Study</Link>
          <Link to="#client">Our Clients</Link>
          <Link to="#cta">Work With Us</Link>
        </NavDesktopLinksWrapper>
      </NavDesktopWrapper>
    </SectionWrapper>
  )
}
