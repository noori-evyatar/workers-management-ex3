import React from 'react';
import './NewWorkerForm.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class NewWorkerForm extends React.Component {

  render() {

    const { workerFirstName, workerLastName, workerAddress, workerIdNumber, workerBirthDate, handleSubmit, handleChange } = this.props;

    return (
      <div className="NewWorkerForm">
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                הוספת עובד חדש
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="Card">
                <Form className="Form" onSubmit={handleSubmit}>
                  <Form.Row className="Names">

                    <Form.Group controlId="formGridFirstName">
                      <Form.Label>שם פרטי</Form.Label>
                      <Form.Control
                        value={workerFirstName}
                        onChange={handleChange}
                        className="PlaceHolder"
                        placeholder="שם עובד"
                      />
                    </Form.Group>

                    <Form.Group controlId="formGridLastName">
                      <Form.Label>שם משפחה</Form.Label>
                      <Form.Control
                        value2={workerLastName}
                        onChange={handleChange}
                        className="PlaceHolder"
                        placeholder="משפחה"
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row className="Names">
                    <Form.Group controlId="formGridIdNumber">
                      <Form.Label>תעודת זהות</Form.Label>
                      <Form.Control
                        value3={workerIdNumber}
                        onChange={handleChange}
                        className="PlaceHolder"
                        placeholder="כולל ספרת ביקורת"
                      />
                    </Form.Group>

                    <Form.Group controlId="formGridBirthDate">
                      <Form.Label>תאריך לידה</Form.Label>
                      <Form.Control
                        value4={workerBirthDate}
                        onChange={handleChange}
                        className="PlaceHolder"
                        placeholder="שנה/חודש/יום"
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formGridAddress">
                    <Form.Label>כתובת</Form.Label>
                    <Form.Control
                      value5={workerAddress}
                      onChange={handleChange}
                      className="PlaceHolder"
                      placeholder="רחוב, דירה, עיר"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    הוספת עובד
                  </Button>
                </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

      </div>
    )
  };

};

export default NewWorkerForm;