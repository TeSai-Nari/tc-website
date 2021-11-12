import React from 'react'
import styled from 'styled-components'

const CardServiceContentWrapper = styled.div`
  display: grid;
  row-gap: 2rem;

  border-radius: 30px;
  padding: 2.1875rem;

  img {
    width: 40%;
  }

  @media (min-width:1024px) {
      img {
      width: 30%;
    }
  }
  
  &:hover {
    background-image: linear-gradient(180deg, #27272E 0%, #303035 100%);
  }
`
export default function CardService(props) {
  return (
    <CardServiceContentWrapper>
      <img src={props.image} alt="icon-1" />
      <h5>{props.title}</h5>
      <p>{props.description}</p>
    </CardServiceContentWrapper>
  )
}
