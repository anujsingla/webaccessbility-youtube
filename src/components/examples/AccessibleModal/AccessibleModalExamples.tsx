import { Button } from "@patternfly/react-core";
import { useState } from "react";
import { AccessibleModal } from "./AccessibleModal";
import { AccessibleModalWithLibarary } from "./AccessibleModalWithLibarary";

export function AccessibleModalExamples() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenWithLibrary, setIsModalOpenWithLibrary] = useState(false);
  const onCloseModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const onCloseModalWithLibrary = () => {
    setIsModalOpenWithLibrary(!isModalOpenWithLibrary);
  };
  return (
    <>
      <h2>Accessible Modal Examples:</h2>
      <Button onClick={onCloseModal}>On Accessible Modal</Button>
      <Button onClick={onCloseModal}>On Accessible Modal With Library</Button>
      <AccessibleModal isModalOpen={isModalOpen} onCloseModal={onCloseModal} />

      <AccessibleModalWithLibarary
        isModalOpen={isModalOpenWithLibrary}
        onCloseModal={onCloseModalWithLibrary}
      />
    </>
  );
}
