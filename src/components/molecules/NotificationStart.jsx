import { useContext, useState } from 'react';
import Notification from '../atoms/Notification';
import { StatusContext } from '../providers/StatusProvider';

export default function NotificationStart() {
  const [visible, setVisible] = useState(true);
  const { status } = useContext(StatusContext);

  if (status === 1) return;

  return (
    <>
      {visible && (
        <Notification
          close={() => setVisible(false)}
          message={'用意ができたらタイマーをスタートしてください'}
        />
      )}
    </>
  );
}
