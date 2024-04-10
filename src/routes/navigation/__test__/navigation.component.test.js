import { screen } from "@testing-library/react";

import Navigation from "../navigation.component";
import { renderWithProviders } from "../../../utils/test/test.utils";

jest.mock('react-redux', () => ({
  __esModule: true,
  // @ts-ignore
  ...jest.requireActual('react-redux'),
}));

describe('Navigation tests', () => {
  test('It should render a Sign in link and not a Sign out link if there is no currentUser', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null
        }
      }
    });

    const signInLinkElement = screen.getByText(/sign in/i)
    expect(signInLinkElement).toBeInTheDocument()

    const signOutLinkElement = screen.queryByText(/sign out/i)
    expect(signOutLinkElement).toBeNull()
  })

  test('It should render Sign Out and not Sign In if there is a currentUser', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {}
        }
      }
    });

    const signInLinkElement = screen.queryByText(/sign in/i)
    expect(signInLinkElement).toBeNull()

    const signOutLinkElement = screen.getByText(/sign out/i)
    expect(signOutLinkElement).toBeInTheDocument()
  })

  test('it should not render a cart dropdown if isCartOpen is false', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: false,
          cartItems: []
        }
      }
    });

    const dropdownTextElement = screen.queryByText(/Your cart is empty/i)
    expect(dropdownTextElement).toBeNull()
  })

  test('it should render a cart dropdown if isCartOpen is true', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: []
        }
      }
    });

    const dropdownTextElement = screen.queryByText(/Your cart is empty/i)
    expect(dropdownTextElement).toBeInTheDocument()
  })
})