import React from 'react';
import { Button, Form, ButtonGroup } from "react-bootstrap";

const PasswordGenerator = (props) => (
    <React.Fragment>
        <Form.Control type="text" disabled={true} value={props.generatedPassword} />

        <Form className='generator-form'>
            <ButtonGroup>
                <Button variant='primary' onClick={props.onGeneratePasswordClick}>
                    Generate
                </Button>
                <Button 
                    variant='primary' 
                    onClick={props.onClipboardClick}>
                    Copy to Clipboard
                </Button>
            </ButtonGroup>
            
            <Form.Group>
                <Form.Label>Length</Form.Label>
                <Form.Control 
                    name="passwordLength" 
                    type="number" 
                    value={props.passwordLength} 
                    onChange={props.onInputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Check 
                        name="includeSpecialCharacters" 
                        type="checkbox" 
                        checked={props.includeSpecialCharacters} 
                        onChange={props.onInputChange}
                        label="Include Special Characters" />
                </Form.Group>
                <Form.Group>
                    <Form.Check 
                        name="includeNumbers" 
                        type="checkbox" 
                        checked={props.includeNumbers} 
                        onChange={props.onInputChange}
                        label="Include Numbers" />
                </Form.Group>
        </Form>
    </React.Fragment>
)

export default PasswordGenerator;