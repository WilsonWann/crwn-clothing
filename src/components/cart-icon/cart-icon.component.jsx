import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount
} from "./cart-icon.styles.js"

const CartIcon = () => {
  const { setIsCartOpen, cartCount } = useContext(CartContext)

  const toggleIsCartOpen = () => setIsCartOpen(prevState => !prevState)

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon