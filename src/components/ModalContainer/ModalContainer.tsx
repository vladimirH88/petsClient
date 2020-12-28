import React from 'react';

interface ModalProps {
	isOpen: boolean,
	isDestroy: boolean,
	title: string,
	cancelButton: any,
	doneButton: any,
	crossCancelButtonHandler?: () => any
}

const ModalContainer: React.FC<ModalProps> = (props) => {
	return (
		<>
			{!props.isDestroy || props.isOpen ? (
				<div className={`modal modal-dialog-centered fade ${props.isOpen ? "show" : "d-none"}`}>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">{props.title}</h5>
								<button className="close" onClick={props.crossCancelButtonHandler}>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								{props.children}
							</div>
							<div className="modal-footer">
								{props.cancelButton}
								{props.doneButton}
							</div>
						</div>
					</div>
				</div>
			) : (
					<></>
				)

			}
		</>
	)
}

export default ModalContainer;