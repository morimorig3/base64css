import { VFC } from 'react';
import Modal from 'react-modal';
import { Text, Flex, Button } from '@chakra-ui/react';
import style from '../styles/Modalwindow.module.css';

type Props = {
  modalIsOpen: boolean;
  closeModal: () => void;
  executeFunc: () => void;
  modaltext: string;
};
if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

export const Modalwindow: VFC<Props> = ({
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
      <Text fontWeight="bold" mb={4}>
        {modaltext}
      </Text>
      <Flex justifyContent="center" gap={4}>
        <Button colorScheme="red" size="md" w={24} onClick={confirmed}>
          はい
        </Button>
        <Button colorScheme="gray" variant="outline" size="md" w={24} onClick={closeModal}>
          もどる
        </Button>
      </Flex>
    </Modal>
  );
};
