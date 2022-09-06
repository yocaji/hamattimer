import { useState } from 'react'
import PostPreview from './PostPreview'

export default function PostForm() {
  const [markdown, setMarkdown] = useState()

  const setData = (e) => {
    e.preventDefault()
    setMarkdown(e.target.value)
  }

  return (
    <>
      <p>
        <textarea
          placeholder="Markdownで記述"
          value={markdown}
          onChange={setData}
          rows={6}
          cols={60}
        />
      </p>
      <PostPreview markdown={markdown} />
    </>
  )
}
