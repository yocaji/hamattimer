import { render, screen, fireEvent, within } from '@testing-library/react'
import SelectLimit from '../../../src/components/molecules/SelectLimit'

describe('SelectLimit', () => {
  let renderResult
  let mockFunction

  beforeEach(() => {
    mockFunction = jest.fn()
    renderResult = render(
      <SelectLimit limit={30} setLimit={mockFunction}/>,
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  test('limitの値が選択済みとなっている', async () => {
    const elements = await screen.getAllByTestId('select-option')
    expect(elements[1].selected).toBe(true)
  })

  test('値を変更したらprops.setLimitで渡した関数が呼ばれる', async () => {
    const desktopSection = await screen.getByTestId('select-limit-desktop')
    fireEvent.change(within(desktopSection).getByRole('combobox'), { target: { value: 60 } })
    expect(mockFunction).toHaveBeenCalledTimes(1)
  })
})
