import React, { Component } from 'react';

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
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value    
        });
      }

    render() {
        return (
            <div>
                <h1>Password Generator</h1>

                <div style={{borderWidth:"1px",borderColor:"black",borderStyle:"solid"}}>
                    <span>{this.state.generatedPassword}</span>
                </div>

                <div>
                    <button>Generate</button>
                    <button>Copy to Clipboard</button>
                </div>

                <div>
                    <label>Length</label>
                    <input name="passwordLength" type="number" value={this.state.passwordLength} onChange={this.handleInputChange} />
                </div>
                <div>
                    <input name="includeSpecialCharacters" type="checkbox" checked={this.state.includeSpecialCharacters} onChange={this.handleInputChange} />
                    <label>Include Special Characters</label>
                </div>
                <div>
                    <input name="includeNumbers" type="checkbox" checked={this.state.includeNumbers} onChange={this.handleInputChange} />
                    <label>Include Numbers</label>
                </div>
            </div>
        )
    }
}