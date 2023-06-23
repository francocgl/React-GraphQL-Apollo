import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-gap: 4rem;
  margin: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin: 2rem;
  }
`

export default Grid
