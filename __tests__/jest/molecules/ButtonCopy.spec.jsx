import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import ButtonCopy from '../../../src/components/molecules/ButtonCopy'

describe('ButtonCopy', () => {
  let renderResult

  beforeEach(() => {
    window.prompt = () => jest.fn()
    renderResult = render(
      <ButtonCopy/>,
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  test('コピーボタンをクリックしたらラベルの文言が変化する', async () => {
    fireEvent.click(screen.getByRole('button', { name: 'Markdown形式でコピー' }))
    await expect(screen.getByRole('button')).toHaveTextContent('コピーしました')
    await waitFor(() => {
      expect(screen.getByRole('button')).toHaveTextContent('Markdown形式でコピー')
    })
  })
})
