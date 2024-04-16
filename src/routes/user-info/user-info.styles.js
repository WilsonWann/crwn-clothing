import styled from "styled-components/macro"

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width:800px){
    width: 100%;
  }
`