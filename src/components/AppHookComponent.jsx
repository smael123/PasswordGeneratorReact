import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css'

import generatePassword from "../services/PasswordGeneratorService";

import useInput from '../hooks/use-input';
import PasswordGeneratorHookComponent from './PasswordGeneratorHookComponent';
import ReusableToast from './ReusableToast';

const AppHookComponent = () => {
    const [ generatedPassword, setGeneratedPassword ] = useState('');
    const { value: passwordLength, bind: bindPasswordLength } = useInput(8);
    const { value: includeSpecialCharacters, bind : bindIncludeSpecialCharacters } = useInput(true, true);
    const { value : includeNumbers, bind : bindIncludeNumbers } = useInput(true, true); 
    const [ toastVisible, setToastVisible ] = useState(false); 

    const handleClipboard = () => {
        navigator.clipboard.writeText(generatedPassword);
        
        setToastVisible(true);
    }

    return (
        <React.Fragment>
            <div className='toast-container'>
                <ReusableToast 
                    toastVisible={toastVisible} 
                    onToastClose={() => setToastVisible(false)}
                    toastHeaderText="Success" 
                    toastBodyText="Copied to clipboard!" />
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