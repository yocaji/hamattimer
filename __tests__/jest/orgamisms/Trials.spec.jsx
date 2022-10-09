import { render, screen, fireEvent } from '@testing-library/react'
import { TrialsProvider } from '../../../src/components/providers/TrialsProvider'
import { IsStartedProvider } from '../../../src/components/providers/IsStartedProvider'
import { MarkdownProvider } from '../../../src/components/providers/MarkdownProvider'
import Trials from '../../../src/components/organisms/Trials'

describe('Trials', () => {
  let renderResult
  let addTrial

  beforeEach(async () => {
    const issue = { 'tobe': '期待する結果', 'asis': '実際の結果', 'problem': '詳しい状況' }
    const trials = [
      { 'id': 100, 'guess': '考えたこと１', 'operation': 'やったこと１', 'result': 'やった結果１' },
    ]
    localStorage.setItem('issue', JSON.stringify(issue))
    await localStorage.setItem('trials', JSON.stringify(trials))

    addTrial = jest.fn()
    renderResult = render(
      <IsStartedProvider>
        <TrialsProvider>
          <MarkdownProvider>
            <Trials addTrial={addTrial}/>,
          </MarkdownProvider>
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
