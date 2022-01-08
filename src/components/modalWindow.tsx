import { VFC } from 'react';
import {
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirmed: () => void;
  title: string;
};
// if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

export const Modalwindow: VFC<Props> = ({
  isOpen = false,
  onClose = () => undefined,
  onConfirmed = () => undefined,
  title = 'モーダルタイトル',
}) => {
  const confirmed = () => {
    onConfirmed();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xs" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="lg">{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex justifyContent="center" gap={4}>
            <Button colorScheme="red" size="md" w={24} onClick={confirmed}>
              はい
            </Button>
            <Button colorScheme="gray" variant="outline" size="md" w={24} onClick={onClose}>
              もどる
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
