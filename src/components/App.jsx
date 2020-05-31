import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css'

import generatePassword from "../services/PasswordGeneratorService";
import PasswordGenerator from '../components/PasswordGenerator';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            generatedPassword: '',
            passwordLength: 0,
            includeSpecialCharacters: true,
            includeNumbers: true
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleGeneratePassword = this.handleGeneratePassword.bind(this);
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

        navigator.clipboard.writeText(text)
    }

    render() {
        const { 
            passwordLength, 
            includeSpecialCharacters, 
            includeNumbers,
            generatedPassword 
        } = this.state;

        return (
            <PasswordGenerator 
                passwordLength={passwordLength} 
                includeSpecialCharacters={includeSpecialCharacters}
                includeNumbers={includeNumbers}
                generatedPassword={generatedPassword}
                onGeneratePasswordClick={this.handleGeneratePassword}
                onInputChange={this.handleInputChange}
                onClipboardClick={this.handleClipboard} />
        )
    }
}