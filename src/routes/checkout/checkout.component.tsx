import { useSelector } from "react-redux"
import CheckoutItem from "../../components/checkout-item/checkout-item.component"
import PaymentForm from '../../components/payment-form/payment-form.component'

import {
  CheckContainer,
  CheckHeader,
  HeaderBlock,
  Total
} from "./checkout.styles"
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector"

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  return (
    <CheckContainer>
      <CheckHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckHeader>
      {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
      <Total>Total: {cartTotal}</Total>
      <PaymentForm />
    </CheckContainer>
  )
}

export default Checkout