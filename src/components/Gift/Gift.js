import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Gift.css';

class Gift extends Component {
    constructor() {
        super();
        this.state = {
            person: '',
            present: ''
        }
    }

    render() {
        return(
            <div className='gift'>
                <Form>
                    <Form.Group>
                        <Form.Label>Person:</Form.Label>
                        <Form.Control 
                            className='input-person'
                            placeHolder='Enter name of recipient here'
                            onChange={event => this.setState({ person: event.target.value})}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Present:</Form.Label>
                        <Form.Control
                            className='input-present'
                            placeHolder='Enter your planned gift here'
                            onChange={event => this.setState({ present: event.target.value})}
                        />
                    </Form.Group>
                </Form>
                    <div className='gift-checkbox'>
                        <input type='checkbox' /> Completed
                    </div>
                <Button 
                    className='btn-remove'
                    onClick={() => this.props.removeGift(this.props.gift.id)}
                >
                    Remove Gift
                </Button>
            </div>
        );
    }
}

export default Gift;