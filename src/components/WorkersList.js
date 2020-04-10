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
                          
                        {worker.workerFirstName} :שם פרטי
                        {worker.workerlastName} :שם משפחה
                        {worker.workerIdNumber} :מספר ת״ז
                        {worker.workerBirthDate} :תאריך לידה
                        {worker.workerAddress} :כתובת
    
                        </Alert>

                    </div>);

                })}
            </div>
        );
    }
};

export default WorkersList;