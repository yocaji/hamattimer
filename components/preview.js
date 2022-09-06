import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

export default function Preview(props) {
  console.log('aaaa')
  return (
    <ReactMarkdown plugins={[gfm]} unwrapDisallowed={false}>
      {props.markdown}
    </ReactMarkdown>
  )
}
