import { MdInfoOutline, MdClose } from 'react-icons/md';

export default function Notification({ message, close }) {
  return (
    <div
      className={
        'notification is-warning has-text-centered has-border-subtle-bottom is-marginless is-radiusless'
      }
    >
      <span className={'icon-text'}>
        <span className={'icon'}>
          <MdInfoOutline />
        </span>
        {message}
      </span>
      <span className={'icon is-pulled-right'}>
        <button
          onClick={() => close()}
          className={'button is-ghost is-shadowless'}
        >
          <MdClose />
        </button>
      </span>
    </div>
  );
}
