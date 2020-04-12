import React from 'react';
import Button from 'react-bootstrap/Button';

 class WorkerItem extends React.Component {
    render() {
        const {handleDelete, handleEdit} =this.props;
        return(
            <div>
            <Button variant="danger" onClick={handleDelete}>הסרה</Button>
            <Button variant="primary" onClick={handleEdit}>עריכה</Button>
            </div>
        );
    }
};

export default WorkerItem;