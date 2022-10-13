import { render, screen,  } from '@testing-library/react'
import Counter from '../../../src/components/molecules/Counter'

describe('Counter', () => {
  let renderResult

  afterEach(() => {
    renderResult.unmount()
  })

  test('propsで渡した時間が表示される', async () => {
    renderResult = render(
      <Counter seconds={3} minutes={2} hours={1}/>,
    )
    const elements = screen.getByTestId('counter')
    expect(elements).toHaveTextContent('1:0203')
  })
})
