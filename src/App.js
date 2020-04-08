import React from 'react';
import './App.css';

import NewWorkerForm from './components/NewWorkerForm';

class App extends React.Component {
  constructor() {
    super();
    this.state=({
      workers: [],
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
      </div>
    )
  };

};

export default App;
