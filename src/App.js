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
      workerBirthDate: "",
    })
  };

  handleChange = (event) => {
    this.setState({

      [event.target.name]: event.target.value
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

  handleDelete = (id) => {
    const filteredWorkers = this.state.workers.filter(worker => 
      worker.id !== id);
      this.setState({
        workers: filteredWorkers
      });
  };

  handleEdit = (id) => {
    const filteredWorkers = this.state.workers.filter(worker => worker.id !== id);
    const selectedWorker = this.state.workers.find(worker => worker.id === id);
    console.log(selectedWorker);

    this.setState({
      workers: filteredWorkers,
      workerFirstName: selectedWorker.workerFirstName,
      workerFirstName: selectedWorker.workerFirstName,
      workerAddress: selectedWorker.workerAddress,
      workerIdNumber: selectedWorker.workerIdNumbe,
      workerBirthDate: selectedWorker.workerBirthDate
    });
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
        <WorkersList
          workers={this.state.workers}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    )
  };

};

export default App;
