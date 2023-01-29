// import { useEffect, useRef } from "react";
import FocusLock from "react-focus-lock";

interface IProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
}

export function AccessibleModalWithLibarary(props: IProps) {
  const { isModalOpen, onCloseModal } = props;

  const onClose = () => {
    onCloseModal();
  };

  return (
    <>
      {isModalOpen && (
        <FocusLock returnFocus>
          <div className="pf-c-backdrop">
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
                  >
                    Cancel
                  </button>
                </footer>
              </div>
            </div>
          </div>
        </FocusLock>
      )}
    </>
  );
}
