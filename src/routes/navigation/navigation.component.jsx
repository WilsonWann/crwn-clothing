import { useSelector, useDispatch } from 'react-redux'
import { Outlet } from "react-router-dom"

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import { signOutStart } from "../../store/user/user.action"

import { selectCurrentUser } from '../../store/user/user.selector'

import {
  NavigationContainer,
  NavLinksContainer,
  NavLink,
  LogoContainer,
} from "./navigation.styles"
import { selectIsCartOpen } from '../../store/cart/cart.selector'

const Navigation = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)

  const signOutUser = () => dispatch(signOutStart())
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