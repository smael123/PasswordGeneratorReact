import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css'

import generatePassword from "../services/PasswordGeneratorService";

import useInput from '../hooks/use-input';
import PasswordGeneratorHookComponent from './PasswordGeneratorHookComponent';

const AppHookComponent = () => {
    const [ generatedPassword, setGeneratedPassword ] = useState('');
    const [ toastHeaderText, setToastHeaderText ] = useState('');
    const [ toastBodyText, setToastBodyText ] = useState('');
    const { value: passwordLength, bind: bindPasswordLength } = useInput(8);
    const { value: includeSpecialCharacters, bind : bindIncludeSpecialCharacters } = useInput(true, true);
    const { value : includeNumbers, bind : bindIncludeNumbers } = useInput(true, true); 
    const [ toastVisible, setToastVisible ] = useState(false); 

    const handleClipboard = () => {
        navigator.clipboard.writeText(generatedPassword);

        setToastHeaderText('Success');
        setToastBodyText('Copied to clipboard.');
        setToastVisible(true);
    }

    return (
        <React.Fragment>
            <div className='toast-container'>
                <Toast 
                    style={{display : toastVisible ? 'block' : 'none' }}
                    show={toastVisible}
                    onClose={() => setToastVisible(false)}>
                    <Toast.Header>
                        <strong className="mr-auto">{toastHeaderText}</strong>
                    </Toast.Header>
                    <Toast.Body>{toastBodyText}</Toast.Body>
                </Toast>
            </div>
            <div className='container'>
                <h1>Password Generator</h1>
                <PasswordGeneratorHookComponent 
                passwordLengthBinds={bindPasswordLength} 
                includeSpecialCharactersBinds={bindIncludeSpecialCharacters}
                includeNumbersBinds={bindIncludeNumbers}
                generatedPassword={generatedPassword}
                onGeneratePasswordClick={() => 
                    setGeneratedPassword(generatePassword(
                        passwordLength, 
                        includeSpecialCharacters, 
                        includeNumbers))}
                onClipboardClick={handleClipboard} />
            </div>
        </React.Fragment>
    )
}

export default AppHookComponent;