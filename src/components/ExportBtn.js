import { useSession } from 'next-auth/react'
import { useContext } from 'react'
import { MarkdownContext } from './providers/MarkdownProvider'
import { Octokit } from 'octokit'
import { GoMarkGithub } from 'react-icons/go'
import { db } from '../utils/db'

export default function ExportBtn() {
  const { data: session } = useSession()
  const { markdown } = useContext(MarkdownContext)

  const uploadImages = async (localMd) => {
    let githubMd = localMd
    const regex = /!\[(\d+)-.+]\((blob:.+)\)/g
    const imagePathsIterator = githubMd.matchAll(regex)
    const imagePaths = [...imagePathsIterator]
    await Promise.all(imagePaths.map(async (imagePath) => {
      const screenshot = await db.screenshots.get({ created_at: Number(imagePath[1]) })
      const buffer = await screenshot.data.arrayBuffer()
      const content = Buffer.from(buffer, 'binary').toString('base64')
      const octokit = new Octokit({ auth: session.accessToken })
      const response = await octokit.rest.repos
      .createOrUpdateFileContents({
        owner: session.user.name,
        repo: 'hamattimer-log',
        path: `images/${imagePath[1]}-${crypto.randomUUID()}-${screenshot.data.name}`,
        message: 'Uploaded by Hamattimer',
        content: content,
      })
      githubMd = githubMd.replace(imagePath[2], response.data.content.download_url)
    }))
    return githubMd
  }

  const uploadFile = async (githubMd) => {
    const content = Buffer.from(githubMd).toString('base64')
    const octokit = new Octokit({ auth: session.accessToken })
    const response = await octokit.rest.repos
    .createOrUpdateFileContents({
      owner: session.user.name,
      repo: 'hamattimer-log',
      path: `${Date.now()}.md`,
      message: 'Uploaded by Hamattimer',
      content: content,
    })
    return response.data.content.html_url
  }

  const uploadMd = async (localMd) => {
    const githubMd = await uploadImages(localMd)
    const url = await uploadFile(githubMd)
    alert(`GitHubにエクスポートしました
    ${url}`)
  }

  if (session) {
    return (
    <a onClick={() => uploadMd(markdown)} className={'navbar-item'}>
      <GoMarkGithub className={'mr-2'}/>
      エクスポート
    </a>
    )
  }
}
