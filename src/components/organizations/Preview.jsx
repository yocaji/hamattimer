import { useContext, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import ButtonCopy from '../molecules/ButtonCopy';
import ButtonGist from '../molecules/ButtonGist';
import { MarkdownContext } from '../providers/MarkdownProvider';

export default function Preview() {
  const { markdown, updateMarkdown } = useContext(MarkdownContext);

  useEffect(() => {
    updateMarkdown();
  });

  return (
    <>
      <div className={'tile is-child pt-4'} id={'preview'}>
        <h1 className={'title is-size-7'}>プレビュー</h1>
        <div className={'content'}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkBreaks]}
            unwrapDisallowed={false}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
      <div className={'ht-sticky-buttons'}>
        <div className={'buttons has-addons is-right'}>
          <ButtonCopy />
          <ButtonGist />
        </div>
      </div>
    </>
  );
}
