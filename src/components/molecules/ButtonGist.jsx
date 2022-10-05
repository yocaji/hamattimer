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
        [`${Date.now()}.md`]: {
          content: content,
        },
      },
    })
    window.open(response.data.html_url)
  }

  return (
    <Button onClick={() => createGist(markdown)} classNames={'is-small is-primary is-outlined'} disabled={status !== 'authenticated'} id={'gist-button'}>
      <GoMarkGithub className={'mr-1'}/>
      Gistに保存する
    </Button>
  )
}
