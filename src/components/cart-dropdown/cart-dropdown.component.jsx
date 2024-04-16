import { useCallback } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import Button from "../button/button.component"

import CartItem from "../cart-item/cart-item.component"

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles"
import { selectCartItems } from "../../store/cart/cart.selector"
import { useTranslation } from "react-i18next"

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate()

  const goToCheckoutHandler = useCallback(() => {
    navigate('/checkout')
  }, [])

  const { t } = useTranslation()

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length
            ? (cartItems.map(item => <CartItem key={item.id} cartItem={item} />))
            : (<EmptyMessage>Your cart is empty</EmptyMessage>)
        }
      </CartItems>
      <Button onClick={goToCheckoutHandler}>{t("go to checkout")}</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown