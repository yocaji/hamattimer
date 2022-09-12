import { useSession } from 'next-auth/react'
import { useContext } from 'react'
import { MarkdownContext } from './providers/MarkdownProvider'
import { Octokit } from 'octokit'
import { GoMarkGithub } from 'react-icons/go'

export default function ExportBtn() {
  const { markdown } = useContext(MarkdownContext)
  const { data: session } = useSession()

  const uploadFile = async () => {
    const content = Buffer.from(markdown).toString('base64')
    const octokit = new Octokit({ auth: session.accessToken })
    octokit.rest.repos
    .createOrUpdateFileContents({
      owner: session.user.name,
      repo: 'playground',
      path: `hamattimer/${Date.now()}.md`,
      message: 'Uploaded by Hamattimer',
      content: content,
    })
    .then(console.log(markdown))
  }

  if (session) {
    return (
    <a onClick={uploadFile} className={'navbar-item'}>
      <GoMarkGithub className={'mr-2'}/>
      エクスポート
    </a>
    )
  }
}
