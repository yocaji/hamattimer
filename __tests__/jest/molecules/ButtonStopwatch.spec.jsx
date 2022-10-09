import { render, screen, fireEvent } from '@testing-library/react'
import ButtonStopwatch from '../../../src/components/molecules/ButtonStopwatch'

describe('ButtonStopwatch', () => {
  let renderResult
  let start, pause

  beforeEach(() => {
    start = jest.fn()
    pause = jest.fn()

    renderResult = render(
      <ButtonStopwatch start={start} pause={pause} isRunning={false} isStarted={false}/>
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  test('スタート前はクリックできない', async () => {
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  test('スタート後はクリックできる', async () => {
    renderResult.rerender(
      <ButtonStopwatch start={start} pause={pause} isRunning={true} isStarted={true}/>
    )
    const button = screen.getByRole('button')
    expect(button).toBeEnabled()
  })

  test('再生中にボタンをクリックするとpauseメソッドが呼ばれる', async () => {
    renderResult.rerender(
      <ButtonStopwatch start={start} pause={pause} isRunning={true} isStarted={true}/>
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(pause).toHaveBeenCalledTimes(1)
  })

  test('一時停止中にボタンをクリックするとstartメソッドが呼ばれる', async () => {
    renderResult.rerender(
      <ButtonStopwatch start={start} pause={pause} isRunning={false} isStarted={true}/>
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(start).toHaveBeenCalledTimes(1)
  })
})
