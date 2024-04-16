import styled from "styled-components/macro"

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width:800px){
    flex-direction: column;
    row-gap: 30px;
    width: 80vw;
    margin: 0 auto;
    align-items: center;
  }
`
