import Image from 'next/image';

export default function Footer({ children }) {
  return (
    <footer className={'footer has-text-centered'}>
      <div className={'is-size-6-half'}>{children}</div>
      <div className={'mt-5'}>
        <a
          href={'https://twitter.com/hamattimer'}
          target={'_blank'}
          rel={'noreferrer'}
          className={'mx-3'}
        >
          <Image
            src={'/x.png'}
            width={28}
            height={28}
            alt={'X'}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </a>
        <a
          href={'https://github.com/yocajii/hamattimer'}
          target={'_blank'}
          rel={'noreferrer'}
          className={'mx-3'}
        >
          <Image
            src={'/github.png'}
            width={32}
            height={32}
            alt={'GitHub'}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </a>
      </div>
      <div className={'mt-4 is-size-7'}>
        <p>© 2022 yocajii</p>
      </div>
    </footer>
  );
}
