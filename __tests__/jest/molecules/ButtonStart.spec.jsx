import { render, screen, fireEvent } from '@testing-library/react'
import ButtonStart from '../../../src/components/molecules/ButtonStart'

describe('ButtonStart', () => {
  let renderResult
  let start, addTrial, setIsStarted

  beforeEach(() => {
    start = jest.fn()
    addTrial = jest.fn()
    setIsStarted = jest.fn()
    renderResult = render(
      <ButtonStart start={start} addTrial={addTrial} setIsStarted={setIsStarted}/>,
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  test('スタートボタンボタンをクリックしたらpropsで渡した関数が呼ばれる', async () => {
    fireEvent.click(screen.getByText('スタート'))
    expect(start).toHaveBeenCalledTimes(1)
    expect(addTrial).toHaveBeenCalledTimes(1)
    expect(setIsStarted).toHaveBeenCalledTimes(1)
  })
})
