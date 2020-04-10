import React from 'react';
import './App.css';

import NewWorkerForm from './components/NewWorkerForm';
import WorkersList from './components/WorkersList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      workers: [],
      id: 0,
      workerFirstName: "",
      workerLastName: "",
      workerAddress: "",
      workerIdNumber: "",
      workerBirthDate: ""
    })
  };

  handleChange = (event) => {
    this.setState({
      workerFirstName: event.target.value1,
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
      workerFirstName: this.state.workerFirstName,
      workerLastName: this.state.workerLastName,
      workerAddress: this.state.workerAddress,
      workerIdNumber: this.state.workerIdNumber,
      workerBirthDate: this.state.workerBirthDate
    }

    const updatedWorkers = [...this.state.workers, newWorker];

    this.setState({
      workers: updatedWorkers,
      id: 0,
      workerFirstName: '',
      workerLastName: '',
      workerAddress: '',
      workerIdNumber: '',
      workerBirthDate: ''
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
        <WorkersList />
      </div>
    )
  };

};

export default App;
