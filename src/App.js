import './App.css';
import Tasks from './components/Tasks/Tasks';
import { Col, Row, Container } from 'react-bootstrap';

function App() {
  return (
    <Container className="App">
      <Row>
        <Col md={6}>
            <Tasks />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
