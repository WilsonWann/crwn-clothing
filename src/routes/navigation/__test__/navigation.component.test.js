import { screen } from "@testing-library/react";

import Navigation from "../navigation.component";
import { renderWithProviders } from "../../../utils/test/test.utils";

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
})