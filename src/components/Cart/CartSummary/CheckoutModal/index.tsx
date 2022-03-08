import Modal from "react-modal";
import Text from "../../../shared/Text";
import { CheckoutModalContainer } from "./styles";

interface CheckoutModalProps {
  modalIsOpen: boolean;
  closeModalHandler: () => void;
}

const CheckoutModal: React.FunctionComponent<CheckoutModalProps> = ({
  closeModalHandler,
  modalIsOpen,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      style={CheckoutModalContainer}
      onRequestClose={closeModalHandler}
    >
      <Text fontSize={20} color="primary">
        Congratulations, your Order has been sent!
      </Text>
    </Modal>
  );
};

export default CheckoutModal;
