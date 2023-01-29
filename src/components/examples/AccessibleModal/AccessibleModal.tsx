import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface IProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
}

export function AccessibleModal(props: IProps) {
  const { isModalOpen, onCloseModal } = props;
  const openModalButtonRef = useRef<null | any>(null);
  const closeHeaderButtonRef = useRef<HTMLButtonElement>(null);
  const closeFooterButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const onClose = () => {
    onCloseModal();
    openModalButtonRef.current?.focus();
  };
  const onKeyPress = (event: KeyboardEvent) => {
    console.log("event", event);
    if (!isModalOpen) {
      return;
    }
    const isEscKeyPress = event.key === "Escape";

    if (isEscKeyPress) {
      onClose();
    }

    const firstElement = closeHeaderButtonRef.current;
    const lastElement = closeFooterButtonRef.current;
    const isTabKeyPress = event.key === "Tab";
    const isShiftKeyPress = event.shiftKey;

    if (isTabKeyPress) {
      if (!isShiftKeyPress && event.target === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }

      if (isShiftKeyPress && event.target === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      }
    }
  };

  useEffect(() => {
    const rootElement = document.getElementById("root");
    rootElement?.setAttribute("aria-hidden", isModalOpen?.toString());
    modalRef.current?.setAttribute("aria-hidden", (!isModalOpen)?.toString());
    if (isModalOpen) {
      openModalButtonRef.current = document.activeElement;
      closeHeaderButtonRef?.current?.focus();
    }
    document.addEventListener("keydown", onKeyPress);
    return () => document.removeEventListener("keydown", onKeyPress);
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen &&
        createPortal(
          <div className="pf-c-backdrop" ref={modalRef}>
            <div className="pf-l-bullseye">
              <div
                className="pf-c-modal-box pf-m-sm"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title-modal-basic-example-modal"
                aria-describedby="modal-description-modal-basic-example-modal"
              >
                <button
                  className="pf-c-button pf-m-plain"
                  type="button"
                  aria-label="Close dialog"
                  onClick={onClose}
                  ref={closeHeaderButtonRef}
                >
                  <i className="fas fa-times" aria-hidden="true"></i>
                </button>
                <header className="pf-c-modal-box__header">
                  <h1
                    className="pf-c-modal-box__title"
                    id="modal-title-modal-basic-example-modal"
                  >
                    Accessible Modal
                  </h1>
                </header>
                <div
                  className="pf-c-modal-box__body"
                  id="modal-description-modal-basic-example-modal"
                >
                  <p>Trying to make Accessible Modal</p>
                </div>
                <footer className="pf-c-modal-box__footer">
                  <button
                    onClick={onClose}
                    className="pf-c-button pf-m-primary"
                    type="button"
                  >
                    Save
                  </button>
                  <button
                    onClick={onClose}
                    className="pf-c-button pf-m-link"
                    type="button"
                    ref={closeFooterButtonRef}
                  >
                    Cancel
                  </button>
                </footer>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
