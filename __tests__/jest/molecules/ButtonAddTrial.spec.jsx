import { render, screen, fireEvent } from '@testing-library/react'
import ButtonAddTrial from '../../../src/components/molecules/ButtonAddTrial'

describe('ButtonAddTrial', () => {
  let renderResult
  let addTrial

  beforeEach(() => {
    addTrial = jest.fn()
    renderResult = render(
      <ButtonAddTrial addTrial={addTrial}/>,
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  test('試したこと追加ボタンをクリックしたらaddTrialで渡した関数が呼ばれる', async () => {
    fireEvent.click(screen.getByRole('button'))
    expect(addTrial).toHaveBeenCalledTimes(1)
  })
})
