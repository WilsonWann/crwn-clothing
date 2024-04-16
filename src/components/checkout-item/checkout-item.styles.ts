import styled from 'styled-components'

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 800px) {
  
  }
`

const NormalSpan = styled.span`
  width: 23%;
`

export const Name = styled(NormalSpan)``
export const Quantity = styled(NormalSpan)`
  display: flex;
`

export const Arrow = styled.div`
  user-select: none;
  cursor: pointer;
`

export const Value = styled.span`
  margin: 0 10px;
`

export const Price = styled(NormalSpan)``


export const RemoveButton = styled.div`
  user-select: none;
  padding-left: 12px;
  cursor: pointer;
`
