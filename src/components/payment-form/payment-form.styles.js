import styled from "styled-components/macro"
import Button from '../button/button.component'

export const PaymentFormContainer = styled.div`
  height:300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    height: 100px;
  }
`

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;

  @media screen and (max-width: 800px) {
    min-width: 60vw;
  }
`

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`