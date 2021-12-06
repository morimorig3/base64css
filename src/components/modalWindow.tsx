import { VFC } from 'react';
import Modal from 'react-modal';
import Button from 'components/Button';
import style from '../styles/Modalwindow.module.css';

type Props = {
  modalIsOpen: boolean;
  closeModal: () => void;
  executeFunc: () => void;
  modaltext: string;
};
if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

const Modalwindow: VFC<Props> = ({
  modalIsOpen = false,
  closeModal = () => undefined,
  executeFunc = () => undefined,
  modaltext = '',
}) => {
  const confirmed = () => {
    executeFunc();
    closeModal();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={style.modal__container}
      overlayClassName={{
        base: style.Overlay,
        afterOpen: style.Overlay__after,
        beforeClose: style.Overlay__before,
      }}
    >
      <p className="font-bold mb-4">{modaltext}</p>
      <div className="flex gap-4 justify-center">
        <Button
          className="w-24 border-red-500 hover:border-transparent hover:bg-red-500 text-red-500 hover:text-gray-100"
          onClick={confirmed}
        >
          はい
        </Button>
        <Button
          className="w-24 border-gray-500 hover:border-transparent hover:bg-gray-500 text-gray-500 hover:text-gray-100"
          onClick={closeModal}
        >
          もどる
        </Button>
      </div>
    </Modal>
  );
};

export default Modalwindow;
