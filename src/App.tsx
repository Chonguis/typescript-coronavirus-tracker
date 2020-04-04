import React, { FormEvent } from 'react';
import './App.css';
import Form from './components/Form/FormContainer';
import SubmittedFormPanel from './components/SubmittedFormPanel/SubmittedFormPanel';

interface FormState {
  continent: string;
  country: string;
  state: string;
}

interface State {
  submitted: boolean;
  formState: FormState;
}

class App extends React.Component<{}, State> {
  constructor(props: any){
    super(props);

    this.state = {
      submitted: false,
      formState: {
        country: '',
        state: '',      
        continent: '',
      },
    }
  }

  onSubmitForm = (e: FormEvent<HTMLFormElement>, formState: {country: string; state: string; continent: string;}) => {
    e.preventDefault();
    this.setState({
      submitted: true,
      formState: formState,
    });
    console.log(formState, 'formState');
  } 
  render(){
    return (
      <div className="App">
        <header className="App-header">
            Learn React
        </header>
  
        <Form onSubmitForm={this.onSubmitForm} />
        {Object.keys(this.state.formState) && <SubmittedFormPanel formState={this.state.formState} />}
      </div>
    );
  }
}

export default App;
