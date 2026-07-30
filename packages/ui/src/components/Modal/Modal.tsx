"use client";

import { ReactNode, useRef } from "react";
import { Dialog } from "@base-ui/react/dialog";
import "./Modal.css";

export interface ModalProps {
  isOpenModal: boolean;
  children: ReactNode;
  autoClose: boolean;
  closeModal: () => void;
}

export function Modal({
  isOpenModal,
  closeModal,
  children,
  autoClose,
}: ModalProps) {
  const popupRef = useRef<HTMLDivElement>(null);

  return (
    <Dialog.Root
      open={isOpenModal}
      onOpenChange={(open) => {
        if (!open && autoClose) closeModal();
      }}
    >
      <Dialog.Portal>
        <Dialog.Backdrop
          className="ui-library-modal__backdrop"
          onClick={autoClose ? closeModal : undefined}
        />
        <Dialog.Popup
          ref={popupRef}
          className="ui-library-modal__popup"
          initialFocus={popupRef}
          finalFocus={false}
        >
          {children}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
