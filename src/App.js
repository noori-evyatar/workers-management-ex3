import React from 'react';
import './App.css';

import NewWorkerForm from './components/NewWorkerForm';
import WorkersList from './components/WorkersList';

class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      workers: [],
      id: 0,
      workerFirstName: '',
      workerLastName: '',
      workerAddress: '',
      workerIdNumber: '',
      workerBirthDate: ''
    })

  };

  render() {
    return (
      <div className="App">
        ניהול רישום עובדים
        <NewWorkerForm />
        <WorkersList />
      </div>
    )
  };

};

export default App;
