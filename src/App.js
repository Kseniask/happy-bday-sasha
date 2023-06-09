import './App.css'
import { useState } from 'react'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import dance from './dance.gif'
import ConfirmModal from './components/Modal'

function App () {
  const [show, setShow] = useState(false)
  const [isCodeEntered, setIsCodeEntered] = useState(false)
  const handleShow = () => setShow(true)

  return (
    <Container className='App'>
      <h1 id='header'> Happy B-Day, Sasha!</h1>
      <Row>
        <Col>
          <img src={dance} height='200px' />
        </Col>
      </Row>
      <p id='wish'>Ось тобі маленький від нас подаруночок :) </p>
      <Container id='instructions'>
        To begin your adventure:
        <ListGroup>
          <ListGroup.Item>
            1) You will require a charged smartphone. iPhone users require a
            iPhone 5s or newer running iOS 10.3 or later (iPhone 5 or 5c will
            not work), while Android users require a device running Android 4.4
            or later. If you have any technical questions call us in advance at
            (833) 609-0989.
          </ListGroup.Item>
          <ListGroup.Item>
            2) Download the Cluesolvers App from App Store or Google Play (you
            can also search as 'Mystery Towns'). **If you are using an iPhone,
            please ensure your phone is NOT set to 'dark mode'**
          </ListGroup.Item>
          <ListGroup.Item>
            3) On the day you are planning to play, activate your game by
            entering the following information on the login screen (please see
            the note about connectivity below)
            <br /> EMAIL: kseniask30@icloud.com
            <br />
            PASSWORD:&nbsp;
            {isCodeEntered ? (
              process.env.REACT_APP_PASSWORD
            ) : (
              <Button
                id='show-password'
                variant='primary'
                onClick={handleShow}
                height='20px'
              >
                Get password
              </Button>
            )}
          </ListGroup.Item>
          <ListGroup.Item>
            4) Go to the Start Location (below), read your instructions and
            backstory, then enter READY to start the clock and begin playing.
          </ListGroup.Item>
          <ListGroup.Item>
            5) You may add additional phones within your team AFTER you have
            started and received your first clue - simply repeat the login
            process using the same email and password.
          </ListGroup.Item>
        </ListGroup>
      </Container>
      <p id='more-info'>
        More info:&nbsp;
        <a
          href='https://www.cluesolvers.com/outside/vancouver-west-coast-caper'
          target='_blank'
        >
          HERE
        </a>
      </p>

      <ConfirmModal
        show={show}
        setShow={setShow}
        setIsCodeEntered={setIsCodeEntered}
      />
    </Container>
  )
}

export default App
