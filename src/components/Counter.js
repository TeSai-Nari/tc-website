import React from 'react'
import styled from 'styled-components'

const CountItem = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 1rem;
  
  border-radius: 30px;
  padding: 2.1875rem;

  img {
    width: 40%;
  }
  
  @media (min-width:1024px) {
      img {
      width: 15%;
    }
  }

  &:hover {
    background-image: linear-gradient(180deg, #27272E 0%, #303035 100%);
    cursor: pointer;
  }
  h2{
    color:${({theme})=>theme.colors.purple};
  }
`
export default function CounterNumber(props) {
  return (
    <CountItem>
      <img src={props.image} alt="icon-7" />
      <h2>{props.number}+</h2>
      <p>{props.content}</p>
    </CountItem>
  )
}
