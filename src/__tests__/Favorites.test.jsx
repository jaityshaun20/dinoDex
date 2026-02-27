import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import DinoCard from '../components/DinoCard'
import { FavoritesProvider } from '../contexts/FavoritesContext'

const mockDino = {
  Name: 'Raptor',
  Description: 'Fast dinosaur'
}

test('adds dinosaur to favorites when button clicked', async () => {
  render(
    <BrowserRouter>
      <FavoritesProvider>
        <DinoCard dino={mockDino} />
      </FavoritesProvider>
    </BrowserRouter>
  )

  const button = screen.getByRole('button')
  await userEvent.click(button)

  expect(screen.getByText('Remove Favorite')).toBeInTheDocument()
})