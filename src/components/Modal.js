import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalMain = ({ show, onHide,title,body}) => {
	return (
		<Modal show={show} onHide={onHide} style={{position:"absolute"}}>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{body}</Modal.Body>
		</Modal>
	)
}

export default ModalMain;