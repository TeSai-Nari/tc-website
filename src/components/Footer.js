import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background-color: #27272E;
  padding: 2rem 0;

  p{
    text-align: center;
  }
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

const MediaSocialWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  align-items: center;
  column-gap: 2rem;
  padding: 2rem 1rem 3rem;

  img {
    width: 100%;
  }

  @media (min-width:1024px) {
    padding: 0 0 3rem 0 ;

      img {
      width: 20%;
    }
  }
`
export default function Footer() {
  return (
    <FooterWrapper>
      <SectionContentWidth>
        <MediaSocialWrapper>
          <img src="./sosmed-icon/facebook-white.png" alt="facebook-white" />
          <img src="./sosmed-icon/twitter-white.png" alt="twitter-white" />
          <img src="./sosmed-icon/pinterest-white.png" alt="pinterest-white" />
          <img src="./sosmed-icon/linkedin-white.png" alt="linkedin-white" />
          <img src="./sosmed-icon/instagram-white.png" alt="instagram-white" />
          <img src="./sosmed-icon/dribbble-white.png" alt="dribbble-white" />
          <img src="./sosmed-icon/behance-white.png" alt="behance-white" />
        </MediaSocialWrapper>
        <p>© 2021. All rights reserved by Treeclouds me.</p>
      </SectionContentWidth>
    </FooterWrapper>
  )
}
