import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

const PostPreview = (props) => {
  return (
    <div>
      <ReactMarkdown plugins={[gfm]} unwrapDisallowed={false}>
        {props.markdown}
      </ReactMarkdown>
    </div>
  )
}

export default PostPreview
