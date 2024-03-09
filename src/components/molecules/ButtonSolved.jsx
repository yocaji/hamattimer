import Image from 'next/image';
import { useState } from 'react';
import { IoMdCheckboxOutline } from 'react-icons/io';
import Button from '../atoms/Button';
import Modal from '../atoms/Modal';

export default function ButtonSolved({ pause }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    pause();
    setIsOpen(true);
  };

  return (
    <>
      <Button
        onClick={() => handleClick()}
        classNames={
          'is-primary is-light has-text-weight-bold is-family-secondary mr-3'
        }
      >
        <IoMdCheckboxOutline />
        <span className={'ml-1'}>解決した！</span>
      </Button>
      {isOpen && (
        <Modal onCancel={() => setIsOpen(false)} title={'おつかれさまです🎉'}>
          <div className={'mb-5'}>
            <Image
              src={'/congratulations.png'}
              width={600}
              height={411}
              quality={80}
              alt={'Congratulations!'}
              style={{
                maxHeight: 'max-content',
              }}
            />
          </div>
          <div className={'notification is-info is-light'}>
            <p className={'lh-1'}>
              作成した記録をGistに保存しておくと、あとから必要になった時に見返すことができます
            </p>
          </div>
        </Modal>
      )}
    </>
  );
}
