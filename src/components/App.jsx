import React, { Component } from 'react';
import { Toast } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css'

import generatePassword from "../services/PasswordGeneratorService";
import PasswordGenerator from '../components/PasswordGenerator';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            generatedPassword: '',
            passwordLength: 8,
            includeSpecialCharacters: true,
            includeNumbers: true,
            toastHeaderText: 'Test',
            toastBodyText: 'Test',
            toastVisible: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleGeneratePassword = this.handleGeneratePassword.bind(this);
        this.toggleToastVisibility = this.toggleToastVisibility.bind(this);
        this.handleClipboard = this.handleClipboard.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value    
        });
    }

    handleGeneratePassword() {
        const { 
            passwordLength, 
            includeSpecialCharacters, 
            includeNumbers 
        } = this.state;

        this.setState({ 
            generatedPassword: generatePassword(passwordLength, includeSpecialCharacters, includeNumbers) 
        });
    }

    handleClipboard(text) {
        // console.log(passwordDom);

        // passwordDom.select();
        // document.execCommand("copy");

        navigator.clipboard.writeText(text);

        this.setState({
            toastHeaderText: 'Success',
            toastBodyText: 'Copied to clipboard.',
            toastVisible: true
        });
    }

    toggleToastVisibility() {
        this.setState({
            toastVisible: !this.state.toastVisible
        })
    }

    render() {
        const { 
            passwordLength, 
            includeSpecialCharacters, 
            includeNumbers,
            generatedPassword,
            toastHeaderText,
            toastBodyText,
            toastVisible
        } = this.state;

        return (
            <div>
                <div className='toast-container'>
                    <Toast 
                        style={{display : toastVisible ? 'block' : 'none' }}
                        show={toastVisible}
                        onClose={this.toggleToastVisibility}>
                        <Toast.Header>
                            <strong className="mr-auto">{toastHeaderText}</strong>
                        </Toast.Header>
                        <Toast.Body>{toastBodyText}</Toast.Body>
                    </Toast>
                </div>
                <div className='container'>
                    <PasswordGenerator 
                    passwordLength={passwordLength} 
                    includeSpecialCharacters={includeSpecialCharacters}
                    includeNumbers={includeNumbers}
                    generatedPassword={generatedPassword}
                    onGeneratePasswordClick={this.handleGeneratePassword}
                    onInputChange={this.handleInputChange}
                    onClipboardClick={this.handleClipboard} />
                </div>
            </div>
            
        )
    }
}