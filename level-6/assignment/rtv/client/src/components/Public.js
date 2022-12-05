import AllIssueList from "./AllIssueList"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Public (){
    return (

<Container>    
    <Row>
      <Col></Col>
      <Col xs={9}>        <div>
               
      <AllIssueList/>
               
                   </div></Col>
      <Col></Col>
    </Row>
    
    </Container>



    )
    }