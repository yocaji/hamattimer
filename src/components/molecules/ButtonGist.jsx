import { useContext } from 'react'
import { useSession } from 'next-auth/react'
import { Octokit } from 'octokit'
import { MarkdownContext } from '../providers/MarkdownProvider'
import Button from '../atoms/Button'
import { GoMarkGithub } from 'react-icons/go'

export default function ButtonGist() {

  const { data: session, status } = useSession()
  const { markdown } = useContext(MarkdownContext)

  const createGist = async (content) => {
    const octokit = new Octokit({ auth: session.accessToken })
    const response = await octokit.rest.gists.create({
      files: {
        [`${filename()}.md`]: {
          content: content,
        },
      },
    })
    window.open(response.data.html_url)
  }

  const filename = () => {
    const tobe = JSON.parse(localStorage.getItem('issue')).tobe
    const title = tobe.replace(/[<>:"\/\\|?*]+/g, '').slice(0, 20)
    const timestamp = localStorage.getItem('started_at') ?? '開始前'
    return `${title}_${timestamp}`
  }

  return (
    <Button onClick={() => createGist(markdown)} classNames={'is-small is-white'}
            disabled={status !== 'authenticated'} id={'gist-button'}>
      <GoMarkGithub className={'mr-1'}/>
      Gistに保存する
    </Button>
  )
}
