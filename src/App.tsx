import "./App.css";
import { Col, Container, Row } from "./components/layout";
import { TableGrid } from "./components";

function App() {
  const columns = [
    { id: "name", label: "Name" },
    {
      id: "age",
      label: "Age",
      renderCell: (row: any) => <strong>{row.age} years</strong>,
    },
    { id: "city", label: "City" },
  ];

  const rows = [
    { id: 1, name: "John Doe", age: 28, city: "New York" },
    { id: 2, name: "Jane Smith", age: 35, city: "San Francisco" },
    { id: 3, name: "Alice Johnson", age: 22, city: "Los Angeles" },
    { id: 4, name: "Bob Brown", age: 45, city: "Chicago" },
    { id: 5, name: "Tom Holland", age: 30, city: "Boston" },
    { id: 6, name: "Elon Musk", age: 50, city: "Austin" },
    { id: 7, name: "Mark Zuckerberg", age: 38, city: "Palo Alto" },
    { id: 8, name: "Bill Gates", age: 65, city: "Seattle" },
    { id: 9, name: "Jeff Bezos", age: 57, city: "Washington" },
    { id: 10, name: "Larry Page", age: 48, city: "Mountain View" },
    { id: 11, name: "Sergey Brin", age: 48, city: "Mountain View" },
    { id: 12, name: "Sundar Pichai", age: 49, city: "San Jose" },
  ];

  return (
    <Container>
      <Row spacing={3} rowSpacing={2}>
        <Col xs={12} sm={12} md={12} lg={12}>
          <TableGrid columns={columns} data={rows} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
