import React from 'react';
import { Button, Form, ButtonGroup } from "react-bootstrap";

const PasswordGeneratorHookComponent = (props) => (
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
                    {...props.passwordLengthBinds} />
                </Form.Group>
                <Form.Group>
                    <Form.Check 
                        name="includeSpecialCharacters" 
                        type="checkbox"
                        label="Include Special Characters"
                        {...props.includeSpecialCharactersBinds} />
                </Form.Group>
                <Form.Group>
                    <Form.Check 
                        name="includeNumbers" 
                        type="checkbox"
                        label="Include Numbers"
                        {...props.includeNumbersBinds} />
                </Form.Group>
        </Form>
    </React.Fragment>
)

export default PasswordGeneratorHookComponent;