import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import DinoCard from '../components/DinoCard'
import { FavoritesProvider } from '../contexts/FavoritesContext'

const mockDino = {
  Name: 'Tyrannosaurus',
  Description: 'A large carnivorous dinosaur'
}

test('renders dinosaur name', () => {
  render(
    <BrowserRouter>
      <FavoritesProvider>
        <DinoCard dino={mockDino} />
      </FavoritesProvider>
    </BrowserRouter>
  )

  expect(screen.getByText('Tyrannosaurus')).toBeInTheDocument()
})