import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { useRouter } from "next/navigation";

import { useFormStore } from "@/lib/formStore";

export default function ConfirmationModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    product,
    email,
    firstName,
    lastName,
    address,
    address2,
    city,
    state,
    zip,
  } = useFormStore();
  const router = useRouter();

  return (
    <Modal isDismissable={true} isOpen={true} onClose={() => router.back()}>
      <ModalContent className="flex flex-col items-center">
        <ModalHeader>Confirm Shipping Details</ModalHeader>
        <ModalBody className="flex flex-col items-center">
          <p>
            {firstName} {lastName}
          </p>
          <p>{address}</p>
          <p>
            {city}, {state} {zip}
          </p>
          {address2 && <p>{address2}</p>}
          <p>{email}</p>
          <p>{product}</p>
        </ModalBody>
        <ModalFooter className="flex items-between">
          <Button onClick={() => router.back()}>Cancel and Edit</Button>
          <Button onClick={() => router.push("/completed")}>Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
