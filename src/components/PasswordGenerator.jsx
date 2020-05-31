import React from 'react';
import {Button, Form, ButtonGroup } from "react-bootstrap";

const PasswordGenerator = (props) => {

        const { 
            passwordLength, 
            includeSpecialCharacters, 
            includeNumbers,
            generatedPassword,
            onInputChange,
            onGeneratePasswordClick
        } = props;

        return (
            <React.Fragment>
                <h1>Password Generator</h1>

                <Form.Control type="text" disabled={true} value={generatedPassword} />

                <Form className='generator-form'>
                    <ButtonGroup>
                        <Button variant='primary' onClick={onGeneratePasswordClick}>
                            Generate
                        </Button>
                        <Button variant='primary'>
                            Copy to Clipboard
                        </Button>
                    </ButtonGroup>
                    
                    <Form.Group>
                        <Form.Label>Length</Form.Label>
                        <Form.Control 
                            name="passwordLength" 
                            type="number" 
                            value={passwordLength} 
                            onChange={onInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Check 
                                name="includeSpecialCharacters" 
                                type="checkbox" 
                                checked={includeSpecialCharacters} 
                                onChange={onInputChange}
                                label="Include Special Characters" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Check 
                                name="includeNumbers" 
                                type="checkbox" 
                                checked={includeNumbers} 
                                onChange={onInputChange}
                                label="Include Numbers" />
                        </Form.Group>
                </Form>
            </React.Fragment>
        )
}

export default PasswordGenerator;