import { MdInfoOutline, MdClose } from 'react-icons/md';

export default function Notification({ message, close }) {
  return (
    <div
      className={
        'notification is-primary is-light has-text-centered has-border-subtle-bottom mt-1'
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
