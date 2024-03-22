import { useContext } from 'react'
import { Outlet, Link } from "react-router-dom"
import { useSelector } from "react-redux"

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"

import { CartContext } from '../../contexts/cart.context'
import { selectCurrentUser } from '../../store/user/user.selector.js'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import {
  NavigationContainer,
  NavLinksContainer,
  NavLink,
  LogoContainer,
} from "./navigation.styles.js"

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)

  const { isCartOpen } = useContext(CartContext)

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className={"logo"} />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop" >
            Shop
          </NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={signOutUser}>
                Sign Out
              </NavLink>
            ) : (
              <NavLink to="/auth" >
                Sign In
              </NavLink>
            )
          }
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation