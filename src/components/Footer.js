import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background-color: #27272E;

  p{
    /* padding:0 1rem; */
    text-align: center;
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
      img {
      width: 25%;
    }
  }
`
export default function Footer() {
  return (
    <FooterWrapper>
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
    </FooterWrapper>
  )
}
