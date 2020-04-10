import React from 'react';
import './WorkersList.css';


import Alert from 'react-bootstrap/Alert';

class WorkersList extends React.Component {
    

    render() {

        const {workers} = this.props;
        return (
            <div>
                <Alert variant='primary'>
                    רשימת עובדים
                </Alert>

            </div>
        )
    };
};

export default WorkersList;