import { format } from 'date-fns';
import { useContext } from 'react';
import Button from '../atoms/Button';
import { StatusContext } from '../providers/StatusProvider';

export default function ButtonTimerStart({ restart, classNames }) {
  const { setStatus, statuses } = useContext(StatusContext);

  const handleClick = () => {
    const limit = localStorage.getItem('limit');
    const time = new Date();
    time.setSeconds(time.getSeconds() + limit * 60);
    restart(time);
    const timestamp = format(Date.now(), 'yyyy年M月d日HH時mm分開始');
    localStorage.setItem('started_at', timestamp);
    setStatus(statuses.working);
  };

  return (
    <Button
      onClick={handleClick}
      classNames={`is-primary has-text-weight-bold ${classNames}`}
    >
      スタート
    </Button>
  );
}
