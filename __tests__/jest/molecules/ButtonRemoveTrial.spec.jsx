import { render, screen, fireEvent } from '@testing-library/react'
import { MarkdownProvider } from '../../../src/components/providers/MarkdownProvider'
import ButtonRemoveTrial from '../../../src/components/molecules/ButtonRemoveTrial'

describe('ButtonRemoveTrial', () => {
  let renderResult
  let mockFunction

  beforeEach(() => {
    const issue = { 'tobe': '期待する結果', 'asis': '実際の結果', 'problem': '詳しい状況' }
    const trials = [
      { 'id': 100, 'guess': '考えたこと１', 'operation': 'やったこと１', 'result': 'やった結果１' },
      { 'id': 200, 'guess': '考えたこと２', 'operation': 'やったこと２', 'result': 'やった結果２' },
    ]
    localStorage.setItem('issue', JSON.stringify(issue))
    localStorage.setItem('trials', JSON.stringify(trials))

    mockFunction = jest.fn()
    renderResult = render(
      <MarkdownProvider>
        <ButtonRemoveTrial id={100} index={0} trials={trials} setTrials={mockFunction}/>,
      </MarkdownProvider>,
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  test('削除ボタンをクリックしたらモーダルが表示される', async () => {
    fireEvent.click(screen.getByText('削除'))

    const elements = screen.getByText('試したこと その1')
    expect(elements).toBeVisible()
  })

  test('削除するボタンをクリックしたらlocalStorageから当該trialが削除される', async () => {
    fireEvent.click(screen.getByText('削除'))
    fireEvent.click(screen.getByText('削除する'))
    const trials = JSON.parse(localStorage.getItem('trials'))
    const ids = trials.map(trial => trial.id)
    expect(ids).toEqual([200])
  })
})
