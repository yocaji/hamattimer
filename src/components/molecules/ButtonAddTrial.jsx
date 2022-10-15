import { MdAdd } from 'react-icons/md';
import Button from '../atoms/Button';

export default function ButtonAddTrial({ addTrial }) {
  return (
    <Button
      onClick={() => addTrial()}
      classNames={'is-primary is-light is-rounded has-text-weight-bold'}
    >
      <MdAdd className={'mr-1'} />
      試したこと
    </Button>
  );
}
