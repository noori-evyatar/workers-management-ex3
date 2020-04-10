import React from 'react';
import './App.css';
import uuid from 'uuid';

import NewWorkerForm from './components/NewWorkerForm';
import WorkersList from './components/WorkersList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      workers: [],
      id: uuid(),
      workerFirstName: "",
      workerLastName: "",
      workerAddress: "",
      workerIdNumber: "",
      workerBirthDate: ""
    })
  };

  handleChange = (event) => {
    this.setState({
      workerFirstName: event.target.value,
      workerLastName: event.target.value2,
      workerAddress: event.target.value3,
      workerIdNumber: event.target.value4,
      workerBirthDate: event.target.value5

    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newWorker = {
      id: this.state.id,
      title: this.state.workerLastName,
      workerFirstName: this.state.workerFirstName,
      workerLastName: this.state.workerLastName,
      workerAddress: this.state.workerAddress,
      workerIdNumber: this.state.workerIdNumber,
      workerBirthDate: this.state.workerBirthDate
    }

    const updatedWorkers = [...this.state.workers, newWorker];

    this.setState({
      workers: updatedWorkers,
      id: uuid(),
      workerFirstName: "",
      workerLastName: "",
      workerAddress: "",
      workerIdNumber: "",
      workerBirthDate: ""
    });
    console.log(this.state.workers);
  };

  render() {
    return (
      <div className="App">
        ניהול רישום עובדים
        <NewWorkerForm
          workerFirstName={this.state.workerFirstName}
          workerLastName={this.state.workerLastName}
          workerAddress={this.state.workerAddress}
          workerIdNumber={this.state.workerIdNumber}
          workerBirthDate={this.state.workerBirthDate}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <WorkersList workers={this.state.workers}/>
      </div>
    )
  };

};

export default App;
