import { render, screen, fireEvent } from '@testing-library/react'
import { FormProvider } from 'react-hook-form'
import { IsStartedProvider } from '../../../src/components/providers/IsStartedProvider'
import { TrialsProvider } from '../../../src/components/providers/TrialsProvider'
import ButtonReset from '../../../src/components/molecules/ButtonReset'

describe('ButtonReset', () => {
  let renderResult
  let reset, resetStopwatch

  beforeEach(() => {
    reset = jest.fn()
    resetStopwatch = jest.fn()
    const getValues = jest.fn(() => {
      return { 'tobe': '', 'asis': '', 'problem': '' }
    })

    const issue = { 'tobe': '期待する結果', 'asis': '実際の結果', 'problem': '詳しい状況' }
    const trials = [
      { 'id': 100, 'guess': '考えたこと１', 'operation': 'やったこと１', 'result': 'やった結果１' },
    ]
    localStorage.setItem('issue', JSON.stringify(issue))
    localStorage.setItem('trials', JSON.stringify(trials))

    const methods = { getValues: getValues, reset: reset }
    renderResult = render(
      <IsStartedProvider>
        <TrialsProvider>
          <FormProvider {...methods}>
            <ButtonReset resetStopwatch={() => resetStopwatch()}/>
          </FormProvider>
        </TrialsProvider>
      </IsStartedProvider>,
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  test('リセットボタンをクリックしたらモーダルが表示される', async () => {
    fireEvent.click(screen.getByText('リセット'))

    const elements = screen.getByText('記録をリセットします')
    expect(elements).toBeVisible()
  })

  test('リセットするボタンをクリックしたらストップウォッチとフォームの初期化メソッドが呼ばれ、localStorageのissueとtrialsが初期化される', async () => {
    fireEvent.click(screen.getByText('リセット'))
    fireEvent.click(screen.getByText('リセットする'))
    const issue = JSON.parse(localStorage.getItem('issue'))
    const trials = JSON.parse(localStorage.getItem('trials'))
    expect(resetStopwatch).toHaveBeenCalledTimes(1)
    expect(reset).toHaveBeenCalledTimes(1)
    expect(issue).toEqual({ 'tobe': '', 'asis': '', 'problem': '' })
    expect(trials).toEqual([])
  })
})
