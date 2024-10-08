import "./App.css";
import { Col, Container, Row } from "./components/layout";
import { TableGrid, Column } from "./components";

function App() {
  const columns: Column[] = [
    { id: "name", label: "Name", fixed: "left" }, // Fixed on the left
    { id: "age", label: "Age" },
    { id: "city", label: "City" },
    { id: "occupation", label: "Occupation" },
    { id: "company", label: "Company" },
    { id: "email", label: "Email" },
    { id: "phone", label: "Phone Number" },
    { id: "salary", label: "Salary" },
    { id: "department", label: "Department" },
    { id: "hireDate", label: "Hire Date" },
    { id: "status", label: "Employment Status" },
    { id: "action", label: "Action", fixed: "right" }, // Fixed on the right
  ];

  const rows = [
    {
      id: 1,
      name: "John Doe",
      age: 28,
      city: "New York",
      occupation: "Engineer",
      company: "Google",
      email: "johndoe@gmail.com",
      phone: "123-456-7890",
      salary: "$120,000",
      department: "Engineering",
      hireDate: "2015-03-25",
      status: "Full-Time",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 35,
      city: "San Francisco",
      occupation: "Designer",
      company: "Adobe",
      email: "janesmith@gmail.com",
      phone: "234-567-8901",
      salary: "$110,000",
      department: "Design",
      hireDate: "2016-07-14",
      status: "Full-Time",
    },
    {
      id: 3,
      name: "Alice Johnson",
      age: 22,
      city: "Los Angeles",
      occupation: "Artist",
      company: "Freelance",
      email: "alicej@gmail.com",
      phone: "345-678-9012",
      salary: "$70,000",
      department: "Art",
      hireDate: "2018-09-30",
      status: "Contract",
    },
    {
      id: 4,
      name: "Bob Brown",
      age: 45,
      city: "Chicago",
      occupation: "Manager",
      company: "Tesla",
      email: "bobbrown@gmail.com",
      phone: "456-789-0123",
      salary: "$150,000",
      department: "Management",
      hireDate: "2010-02-18",
      status: "Full-Time",
    },
    {
      id: 5,
      name: "Tom Holland",
      age: 30,
      city: "Boston",
      occupation: "Actor",
      company: "Marvel Studios",
      email: "tomholland@gmail.com",
      phone: "567-890-1234",
      salary: "$500,000",
      department: "Acting",
      hireDate: "2017-06-12",
      status: "Contract",
    },
    {
      id: 6,
      name: "Elon Musk",
      age: 50,
      city: "Austin",
      occupation: "CEO",
      company: "SpaceX",
      email: "elonmusk@spacex.com",
      phone: "678-901-2345",
      salary: "$1,000,000",
      department: "Executive",
      hireDate: "2008-05-01",
      status: "Full-Time",
    },
    {
      id: 7,
      name: "Mark Zuckerberg",
      age: 38,
      city: "Palo Alto",
      occupation: "CEO",
      company: "Meta",
      email: "mark@facebook.com",
      phone: "789-012-3456",
      salary: "$1,200,000",
      department: "Executive",
      hireDate: "2004-04-15",
      status: "Full-Time",
    },
    {
      id: 8,
      name: "Bill Gates",
      age: 65,
      city: "Seattle",
      occupation: "Philanthropist",
      company: "Bill & Melinda Gates Foundation",
      email: "billgates@microsoft.com",
      phone: "890-123-4567",
      salary: "$1,500,000",
      department: "Philanthropy",
      hireDate: "2000-11-22",
      status: "Full-Time",
    },
    {
      id: 9,
      name: "Jeff Bezos",
      age: 57,
      city: "Washington",
      occupation: "CEO",
      company: "Amazon",
      email: "jeff@amazon.com",
      phone: "901-234-5678",
      salary: "$1,200,000",
      department: "Executive",
      hireDate: "1998-09-04",
      status: "Full-Time",
    },
    {
      id: 10,
      name: "Larry Page",
      age: 48,
      city: "Mountain View",
      occupation: "Co-Founder",
      company: "Google",
      email: "larrypage@google.com",
      phone: "012-345-6789",
      salary: "$1,100,000",
      department: "Executive",
      hireDate: "1999-03-01",
      status: "Full-Time",
    },
    {
      id: 11,
      name: "Sergey Brin",
      age: 48,
      city: "Mountain View",
      occupation: "Co-Founder",
      company: "Google",
      email: "sergeybrin@google.com",
      phone: "123-456-7890",
      salary: "$1,100,000",
      department: "Executive",
      hireDate: "1999-03-01",
      status: "Full-Time",
    },
    {
      id: 12,
      name: "Sundar Pichai",
      age: 49,
      city: "San Jose",
      occupation: "CEO",
      company: "Google",
      email: "sundarpichai@google.com",
      phone: "234-567-8901",
      salary: "$1,000,000",
      department: "Executive",
      hireDate: "2015-08-10",
      status: "Full-Time",
    },
  ];

  return (
    <Container>
      <Row spacing={3} rowSpacing={2}>
        <Col xs={12} sm={12} md={12} lg={12}>
          <TableGrid
            columns={columns}
            data={rows}
            onRowClick={(row) => {
              console.log("Row clicked:", row);
            }}
            onCellClick={(row, field) => {
              console.log("Cell clicked:", row, "Column ID:", field);
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
