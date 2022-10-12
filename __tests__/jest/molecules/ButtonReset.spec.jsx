import { render, screen, fireEvent } from '@testing-library/react'
import { FormProvider } from 'react-hook-form'
import { StatusProvider } from '../../../src/components/providers/StatusProvider'
import { TrialsProvider } from '../../../src/components/providers/TrialsProvider'
import ButtonReset from '../../../src/components/molecules/ButtonReset'

describe('ButtonReset', () => {
  let renderResult
  let reset

  beforeEach(() => {
    reset = jest.fn()
    const getValues = jest.fn(() => {
      return { 'tobe': '', 'asis': '', 'problem': '' }
    })

    const issue = { 'tobe': '期待する結果', 'asis': '実際の結果', 'problem': '詳しい状況' }
    const trials = [
      { 'id': 100, 'guess': '考えたこと１', 'operation': 'やったこと１', 'result': 'やった結果１' },
    ]
    const started_at = '2022年10月10日18時00分開始'
    const timer = { 'seconds': 3, 'minutes': 3, 'hours': 3 }
    localStorage.setItem('issue', JSON.stringify(issue))
    localStorage.setItem('trials', JSON.stringify(trials))
    localStorage.setItem('started_at', started_at)
    localStorage.setItem('timer', JSON.stringify(timer))

    const methods = { getValues: getValues, reset: reset }
    renderResult = render(
      <StatusProvider>
        <TrialsProvider>
          <FormProvider {...methods}>
            <ButtonReset/>
          </FormProvider>
        </TrialsProvider>
      </StatusProvider>,
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
    const started_at = localStorage.getItem('started_at')
    const timer = JSON.parse(localStorage.getItem('timer'))
    expect(reset).toHaveBeenCalledTimes(1)
    expect(issue).toEqual({ 'tobe': '', 'asis': '', 'problem': '' })
    expect(trials).toEqual([])
    expect(started_at).toEqual('')
    expect(timer).toEqual({ 'seconds': 0, 'minutes': 0, 'hours': 0 })
  })
})
