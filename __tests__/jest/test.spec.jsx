import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Test from '../../src/components/Test'

describe('Copy Button', () => {

  test('renders a heading', () => {
    render(<Test/>)
    expect(screen.getByText(/Success/)).toBeInTheDocument()
  })
})
