import { render, screen,  } from '@testing-library/react'
import StopwatchCounter from '../../../src/components/molecules/StopwatchCounter'

describe('StopwatchCounter', () => {
  let renderResult
  let start, pause

  beforeEach(() => {
    start = jest.fn()
    pause = jest.fn()
    renderResult = render(
      <StopwatchCounter limit={'30'} seconds={0} minutes={30} hours={0} days={0} pause={pause} isRunning={true}/>,
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  test('limitの時間に達するとモーダルが表示される', async () => {
    renderResult.rerender(
      <StopwatchCounter limit={'30'} seconds={0} minutes={30} hours={0} days={0} pause={pause} isRunning={true}/>,
    )
    const elements = screen.getByText('調子はどうですか？')
    expect(elements).toBeVisible()
  })
})
