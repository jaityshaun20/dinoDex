import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Nav from '../components/Nav'

test('renders navigation links', () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  )

  expect(screen.getByText('Home')).toBeInTheDocument()
  expect(screen.getByText('Favorites')).toBeInTheDocument()
})