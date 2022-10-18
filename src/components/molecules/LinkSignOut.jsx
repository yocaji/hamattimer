import { useSession, signOut } from 'next-auth/react';

export default function LinkSignOut() {
  const { data: session } = useSession();

  return (
    <>
      {session && (
        <>
          <span>｜</span>
          <a onClick={() => signOut()} className={'mx-3'}>
            GitHub連携解除
          </a>
        </>
      )}
    </>
  );
}
