import { useSession } from 'next-auth/react'
import { useContext } from 'react'
import { MarkdownContext } from './providers/MarkdownProvider'
import { Octokit } from 'octokit'
import { GoMarkGithub } from 'react-icons/go'

export default function ExportBtn() {
  const { data: session } = useSession()
  const { markdown } = useContext(MarkdownContext)

  const createGist = async (content) => {
    const octokit = new Octokit({ auth: session.accessToken })
    const response = await octokit.rest.gists.create({
      files: {[`${Date.now()}.md`]: {
          content: content
        }
      }
    })
    window.open(response.data.html_url)
  }

  if (session) {
    return (
    <button onClick={() => createGist(markdown)} className={'button'}>
      <GoMarkGithub className={'mr-2'}/>
      Export
    </button>
    )
  }
}
