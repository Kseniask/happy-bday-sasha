import { Modal, Button, Form } from 'react-bootstrap'
import { useState } from 'react'

function ConfirmModal ({ setShow, show, setIsCodeEntered }) {
  const [isWrong, setIsWrong] = useState(false)
  const [code, setCode] = useState('')
  const handleClose = () => {
    setShow(false)
    setIsWrong(false)
  }

  const onFormSubmit = () => {
    if (code.localeCompare(process.env.PASSCODE)) {
      setIsWrong(true)
    } else {
      setIsCodeEntered(true)
      handleClose()
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Enter your code</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isWrong ? (
          'Beeeep, WRONG'
        ) : (
          <Form onSubmit={onFormSubmit}>
            <Form.Group className='mb-3' controlId='passcode'>
              <Form.Control
                type='password'
                placeholder='Password'
                onChange={e => setCode(e.target.value)}
              />
            </Form.Group>
          </Form>
        )}
      </Modal.Body>
      {!isWrong ? (
        <Modal.Footer>
          <Button variant='primary' onClick={onFormSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      ) : null}
    </Modal>
  )
}
export default ConfirmModal
