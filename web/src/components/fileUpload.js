const React = require('react')
const { Modal, Button, FormControl } = require('react-bootstrap')

	const FileUpload = (props) => (
			<Modal
			show={props.show}
			onHide={props.close}
			container={props.this}
			className="mv6"
			>
			<Modal.Header closeButton>
				<Modal.Title id="upload-photo">Upload Photo</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<form >
					<FormControl
						type="file"
						placeholder="ex. picture.png"
						onChange={props.handleFile}
					/>
				</form>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.close}>Cancel</Button>
				<Button type="submit" onClick={props.handleUpload} >Save</Button>
			</Modal.Footer>
		</Modal>
	)

module.exports = FileUpload
