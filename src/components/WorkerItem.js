import React from 'react';

 class WorkerItem extends React.Component {
    render() {
        const {title} =this.props;
        return(
            <div>
                {title}
            </div>
        );
    }
};

export default WorkerItem;