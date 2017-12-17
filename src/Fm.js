import React, {Component} from 'react'
import {ControlLabel, Form, FormControl, FormGroup, Grid,Button, Well,InputGroup,Glyphicon} from 'react-bootstrap'

class Fm extends Component {

    render() {
        return (
            <div>
            <Grid>
                <Well>
                    <Form inline action=''>
                        <FormGroup controlId='formInlineName' validationState='success'>
                            <ControlLabel>Name</ControlLabel>{' '}
                            <InputGroup>
                            <InputGroup.Addon>@</InputGroup.Addon>
                            <FormControl type='text' placeholder='input the name'/>
                                <InputGroup.Addon><Glyphicon glyph='music'/></InputGroup.Addon>

                            </InputGroup>
                        </FormGroup>
                        <FormGroup controlId='formInlineEmail' validationState='error'>
                            <ControlLabel>Email</ControlLabel>{' '}
                            <FormControl type='text' placeholder='input the email'/>
                        </FormGroup>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Well>
            </Grid>
                <Grid>
                    <Well>
                        <Form horizontal action=''>
                            <FormGroup controlId='formInlineName' bsSize='large' validationState='warning'>
                                <ControlLabel>Name</ControlLabel>{' '}
                                <FormControl type='text' placeholder='input the name'/>
                            </FormGroup>
                            <FormGroup controlId='formInlineEmail' bsSize='small'>
                                <ControlLabel>Email</ControlLabel>{' '}
                                <FormControl type='text' placeholder='input the email'/>
                            </FormGroup>
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Well>
                </Grid>
            </div>
        )

    }
}

export default Fm