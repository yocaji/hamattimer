import { signIn, useSession } from 'next-auth/react';
import { Octokit } from 'octokit';
import { useContext, useEffect } from 'react';
import { GoMarkGithub } from 'react-icons/go';
import Button from '../atoms/Button';
import { MarkdownContext } from '../providers/MarkdownProvider';

export default function ButtonGist() {
  const { data: session, status } = useSession();
  const { markdown } = useContext(MarkdownContext);

  useEffect(() => {
    (async () => {
      const prevHistory = JSON.parse(localStorage.getItem('authHistory')) ?? [];
      const currentHistory = JSON.stringify([...prevHistory, status].slice(-3));
      localStorage.setItem('authHistory', currentHistory);
      if (
        currentHistory !==
        JSON.stringify(['unauthenticated', 'loading', 'authenticated'])
      )
        return;
      await createGist(markdown);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const handleClick = async () => {
    if (status === 'unauthenticated') {
      await signIn('github');
    } else {
      await createGist(markdown);
    }
  };
  const createGist = async (content) => {
    const octokit = new Octokit({ auth: session.accessToken });
    const response = await octokit.rest.gists.create({
      files: {
        [`${filename()}.md`]: {
          content: content,
        },
      },
    });
    window.open(response.data.html_url);
  };

  const filename = () => {
    const tobe = JSON.parse(localStorage.getItem('issue')).tobe;
    const title = tobe.replace(/[<>:"/\\|?*]+/g, '').slice(0, 20);
    const timestamp = localStorage.getItem('started_at') ?? '開始前';
    return `${title}_${timestamp}`;
  };

  return (
    <Button
      onClick={() => handleClick()}
      classNames={'is-small is-primary is-light is-fullwidth'}
      id={'gist-button'}
    >
      <GoMarkGithub className={'mr-1'} />
      Gistに保存する
    </Button>
  );
}
