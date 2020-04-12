import React from 'react';
import Button from 'react-bootstrap/Button';

 class WorkerItem extends React.Component {
    render() {
        const {handleDelete} =this.props;
        return(
            <div>
            <Button variant="danger" onClick={handleDelete}>הסרה</Button>
            </div>
        );
    }
};

export default WorkerItem;