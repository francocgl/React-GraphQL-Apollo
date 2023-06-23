import styled from 'styled-components'

const Card = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 1fr;
  background: #efefef;
  padding: 2rem;
  border-radius: 0.5rem;
  max-width: 25rem;
  border: 0.5px solid #efefef;
  flex-grow: 1;
  -webkit-box-shadow: 3px 6px 19px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 6px 19px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 6px 19px -6px rgba(0, 0, 0, 0.75);
`

const CardImage = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: cover;
  object-position: center center;
`

const CardDescription = styled.p`
  flex-grow: 1;
  font-size: 1em;
  line-height: 1.6em;
  margin: 0;
`

const CardButton = styled.button`
  background: #000000;
  border: none;
  cursor: pointer;
  color: white;
  text-transform: uppercase;
  font-size: 1.1em;
  font-weight: bold;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 0.5s ease-in-out;
  width: 100%;
  &:hover {
    background: #555cb1;
  }
`
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const CardHeader = styled.div`
  width: 100%;
  height: auto;
`

const CardPrice = styled.h3`
  font-weight: bold;
  color: green;
`

const CardName = styled.h2`
  font-size: 1.2em;
  font-weight: bold;
`
export {
  Card,
  CardBody,
  CardHeader,
  CardName,
  CardPrice,
  CardButton,
  CardDescription,
  CardImage,
}
