import { render, screen, fireEvent, within } from '@testing-library/react'
import SelectLimit from '../../../src/components/molecules/SelectLimit'

describe('SelectLimit', () => {
  let renderResult
  let setLimit

  beforeEach(() => {
    setLimit = jest.fn()
    renderResult = render(
      <SelectLimit limit={30} setLimit={setLimit}/>,
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  test('limitの値が選択済みとなっている', async () => {
    const elements = await screen.getAllByTestId('select-option')
    expect(elements[2].selected).toBe(true)
  })

  test('値を変更したらprops.setLimitで渡した関数が呼ばれる', async () => {
    const desktopSection = await screen.getByTestId('select-limit')
    fireEvent.change(within(desktopSection).getByRole('combobox'), { target: { value: 60 } })
    expect(setLimit).toHaveBeenCalledTimes(1)
  })
})
