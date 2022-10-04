import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../../../src/components/atoms/Button'

describe('Button', () => {
  let renderResult
  let handleClick

  beforeEach(() => {
    handleClick = jest.fn()
    renderResult = render(
      <Button onClick={handleClick}>
        ボタン
      </Button>
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  test('ボタンをクリックしたらonClickが呼ばれる', () => {
    fireEvent.click(screen.getByText('ボタン'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
