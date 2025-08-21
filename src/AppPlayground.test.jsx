// src/AppPlayground.test.jsx
import { render, screen } from '@testing-library/react'
import AppPlayground from './AppPlayground'

test('renders playground hello', () => {
  render(<AppPlayground />)
  expect(screen.getByText(/hello playground/i)).toBeInTheDocument()
})