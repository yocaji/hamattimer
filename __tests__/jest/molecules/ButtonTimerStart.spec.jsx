import { render, screen, fireEvent } from '@testing-library/react'
import ButtonTimerStart from '../../../src/components/molecules/ButtonTimerStart'
import { StatusProvider } from '../../../src/components/providers/StatusProvider'

describe('ButtonTimerStart', () => {
  let renderResult
  let restart

  beforeEach(() => {
    restart = jest.fn()
    renderResult = render(
      <StatusProvider>
        <ButtonTimerStart restart={restart}/>
      </StatusProvider>,
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  test('スタートボタンをクリックするとrestartメソッドが呼ばれる', async () => {
    fireEvent.click(screen.getByRole('button'))
    expect(restart).toHaveBeenCalledTimes(1)
  })
})
