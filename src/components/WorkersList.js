import React from 'react';
import './WorkersList.css';
import WorkerItem from './WorkerItem';
import Alert from 'react-bootstrap/Alert';

class WorkersList extends React.Component {

    render() {
        const { workers, handleDelete, handleEdit } = this.props;

        return (
            <div className="WorkersList">
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
                            <br></br>
                            <WorkerItem
                                key={worker.id}
                                handleDelete={() => handleDelete(worker.id)}
                                handleEdit={() => handleEdit(worker.id)}
                           />
                        </Alert>

                    </div>);

                })}
            </div>
        );
    }
};

export default WorkersList;