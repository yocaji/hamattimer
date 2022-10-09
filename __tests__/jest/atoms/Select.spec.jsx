import { render, screen, fireEvent } from '@testing-library/react'
import Select from '../../../src/components/atoms/Select'

describe('Select', () => {
  let renderResult
  let handleChange

  beforeEach(() => {
    const options = [
      { id: 1, value: 15 },
      { id: 2, value: 30 },
      { id: 3, value: 60 },
    ]
    handleChange = jest.fn((value) => {
      renderResult.rerender(<Select onChange={() => handleChange()} options={options} value={value}/>)
    })
    renderResult = render(
      <Select onChange={() => handleChange()} options={options} value={30}/>
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  test('初回は初期値が選択済みとなっている', async () => {
    const elements = await screen.getAllByTestId('select-option')
    expect(elements[1].selected).toBe(true)
  })

  test('選択した値が選択済みとなっている', async () => {
    fireEvent.change(screen.getByTestId('select'), { target: { value: 60 } })

    const elements = await screen.getAllByTestId('select-option')
    expect(elements[2].selected).toBe(true)
  })
})
