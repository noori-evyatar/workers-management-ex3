import React from 'react';
import './WorkersList.css';
import WorkerItem from './WorkerItem';
import Alert from 'react-bootstrap/Alert';

class WorkersList extends React.Component {


    render() {
        const { workers } = this.props;

        return (
            <div>
                {workers.map((worker, key) => {
                    return (<div key={key}>
                        <Alert variant="primary">
                          
                        שם פרטי: {worker.workerFirstName}
                        <br></br>
                      שם משפחה: {worker.workerLastName} 
                      <br></br>
                      מספר ת״ז: {worker.workerIdNumber} 
                      <br></br>
                      תאריך לידה: {worker.workerBirthDate} 
                      <br></br>
                     כתובת: {worker.workerAddress} 
    
                        </Alert>

                    </div>);

                })}
            </div>
        );
    }
};

export default WorkersList;