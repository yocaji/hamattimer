import { render, screen, fireEvent } from '@testing-library/react'
import { TrialsProvider } from '../../../src/components/providers/TrialsProvider'
import { IsStartedProvider } from '../../../src/components/providers/IsStartedProvider'
import Trials from '../../../src/components/organisms/Trials'

describe('Trials', () => {
  let renderResult
  let addTrial

  beforeEach(async () => {
    const trials = [
      { 'id': 100, 'guess': '考えたこと１', 'operation': 'やったこと１', 'result': 'やった結果１' },
    ]
    await localStorage.setItem('trials', JSON.stringify(trials))

    addTrial = jest.fn()
    renderResult = render(
      <IsStartedProvider>
        <TrialsProvider>
          <Trials addTrial={addTrial}/>,
        </TrialsProvider>
      </IsStartedProvider>,
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  test('試したこと追加ボタンをクリックしたらprops.addTrialで渡した関数が呼ばれる', async () => {
    fireEvent.click(screen.getByRole('button', { name: '試したこと' }))
    await expect(addTrial).toHaveBeenCalledTimes(1)
  })
})
