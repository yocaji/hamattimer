import { useContext, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdContentCopy, MdOutlineCheck } from 'react-icons/md';
import Button from '../atoms/Button';
import { MarkdownContext } from '../providers/MarkdownProvider';

export default function ButtonCopy() {
  const { markdown } = useContext(MarkdownContext);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 1000);
  };

  return (
    <CopyToClipboard text={markdown}>
      <Button
        onClick={handleClick}
        classNames={'is-small is-shadowless'}
      >
        {isSuccess ? (
          <MdOutlineCheck className={'mr-1'} />
        ) : (
          <MdContentCopy className={'mr-1'} />
        )}
        {isSuccess ? 'コピーしました' : 'Markdown形式でコピー'}
      </Button>
    </CopyToClipboard>
  );
}
