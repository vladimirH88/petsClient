import React from 'react';

interface ModalProps {
    isOpen: boolean;
    isDestroy: boolean;
    title: string;
    cancelButton: any;
    doneButton: any;
    crossCancelButtonHandler?: () => void;
}

const ModalContainer: React.FC<ModalProps> = ({
    isDestroy,
    isOpen,
    title,
    crossCancelButtonHandler,
    children,
    cancelButton,
    doneButton,
}) => (
    <>
        {!isDestroy || isOpen ? (
            <div className={`modal modal-dialog-centered fade ${isOpen ? 'show' : 'd-none'}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                            <button className="close" onClick={crossCancelButtonHandler}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">{children}</div>
                        <div className="modal-footer">
                            {cancelButton}
                            {doneButton}
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <></>
        )}
    </>
);

export default ModalContainer;
