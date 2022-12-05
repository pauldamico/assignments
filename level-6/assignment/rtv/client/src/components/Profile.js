import IssueForm from "./IssueForm.js"
import UserIssueList from "./UserIssueList.js"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Profile (){
    return (



<Container>
    
<Row>
  <Col></Col>
  <Col xs={9}>        <div>
           
           <IssueForm/>
           <UserIssueList/>
           
               </div></Col>
  <Col></Col>
</Row>

</Container>


    )
    }