import { useContext } from 'react'
import { useSession } from 'next-auth/react'
import { Octokit } from 'octokit'
import { MarkdownContext } from '../providers/MarkdownProvider'
import { GoMarkGithub } from 'react-icons/go'

export default function GistButton() {

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
    <button onClick={() => createGist(markdown)} className={'button is-small'} disabled={status !== 'authenticated'}>
      <GoMarkGithub className={'mr-1'}/>
      Gistに保存する
    </button>
  )
}
