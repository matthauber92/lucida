import './App.css'
import {Item, Container, Row} from "./components/layout";

function App() {

  return (
    <Container>
      <Row spacing={3} rowSpacing={2}>
        <Item xs={12} sm={6} md={4} lg={3}>
          <div style={{ backgroundColor: '#ddd', padding: '20px', textAlign: 'center' }}>Column 1</div>
        </Item>
        <Item xs={12} sm={6} md={4} lg={3}>
          <div style={{ backgroundColor: '#ddd', padding: '20px', textAlign: 'center' }}>Column 2</div>
        </Item>
        <Item xs={12} sm={6} md={4} lg={3}>
          <div style={{ backgroundColor: '#ddd', padding: '20px', textAlign: 'center' }}>Column 3</div>
        </Item>
        <Item xs={12} sm={6} md={4} lg={3}>
          <div style={{ backgroundColor: '#ddd', padding: '20px', textAlign: 'center' }}>Column 4</div>
        </Item>
      </Row>
    </Container>
  )
}

export default App
