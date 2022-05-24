import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NavigationItems from './NavigationItems'

test('Dont show link to "current user orders"', async () => {
  const props = {
    isAuth: false,
    itemsInCart: null,
  }
  const { queryByText } = render(
    <BrowserRouter>
      <NavigationItems {...props} />
    </BrowserRouter>
  )

  expect(queryByText('My Orders')).not.toBeInTheDocument()
})

test('show link to "current user orders"', async () => {
  const props = {
    isAuth: true,
    itemsInCart: null,
  }
  const { findByText } = render(
    <BrowserRouter>
      <NavigationItems {...props} />
    </BrowserRouter>
  )

  const orders = await findByText('My Orders')

  expect(orders).toBeTruthy()
})

test('Dont show link to log out to unauthenticated user', async () => {
  const props = {
    isAuth: false,
    itemsInCart: null,
  }
  const { queryByText } = render(
    <BrowserRouter>
      <NavigationItems {...props} />
    </BrowserRouter>
  )

  const logout = queryByText('Log out')

  expect(logout).not.toBeInTheDocument()
})

test('show log out link to authenticated user', async () => {
  const props = {
    isAuth: true,
    itemsInCart: null,
  }
  const { findByText } = render(
    <BrowserRouter>
      <NavigationItems {...props} />
    </BrowserRouter>
  )

  const logout = await findByText('Log out')

  expect(logout).toBeTruthy()
})

test('show number of items in cart to user', async () => {
  const props = {
    isAuth: true,
    itemsInCart: 10,
  }
  const { findByText } = render(
    <BrowserRouter>
      <NavigationItems {...props} />
    </BrowserRouter>
  )

  const items = await findByText('10')

  expect(items).toBeTruthy()
})