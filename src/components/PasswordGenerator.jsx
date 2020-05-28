import React, { Component } from 'react';

export default class PasswordGenerator extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { 
            passwordLength, 
            includeSpecialCharacters, 
            includeNumbers,
            generatedPassword,
            onInputChange,
            onGeneratePasswordClick
        } = this.props;

        return (
            <div>
                <h1>Password Generator</h1>

                <div style={{borderWidth:"1px",borderColor:"black",borderStyle:"solid"}}>
                    <span>{generatedPassword}</span>
                </div>

                <div>
                    <button onClick={onGeneratePasswordClick}>
                        Generate
                    </button>
                    <button>Copy to Clipboard</button>
                </div>

                <div>
                    <label>Length</label>
                    <input 
                        name="passwordLength" 
                        type="number" 
                        value={passwordLength} 
                        onChange={onInputChange} />
                </div>
                <div>
                    <input 
                        name="includeSpecialCharacters" 
                        type="checkbox" 
                        checked={includeSpecialCharacters} 
                        onChange={onInputChange} />
                    <label>Include Special Characters</label>
                </div>
                <div>
                    <input 
                        name="includeNumbers" 
                        type="checkbox" 
                        checked={includeNumbers} 
                        onChange={onInputChange} />
                    <label>Include Numbers</label>
                </div>
            </div>
        )
    }
}