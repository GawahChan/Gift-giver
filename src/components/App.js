import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';
import { max_number } from '../helper';

class App extends Component {
    constructor() {
        super();
        this.state = {
            gifts: []
        }
    }

    addGift = () => {
        const { gifts } = this.state;

        gifts.push({ id: max_number(this.state.gifts.map(gift => gift.id)) + 1 }); 

        this.setState({ gifts });
    }

    removeGift = (id) => {
        const gifts = this.state.gifts.filter( gift => gift.id !== id);

        this.setState({ gifts });
    }

    render() {
        return (
            <div className='App'>
                <h1>Gift Giver</h1>
                <p>Forever keeping track of your gift list and making sure you don't forget your loved ones</p>
                <div className='gift-list'>
                    {
                        this.state.gifts.map(gift => {
                            return (
                                <Gift 
                                    key={gift.id}
                                    gift={gift}
                                    removeGift={this.removeGift}
                                />
                            );
                        })
                    }
                </div>
                <Button className='btn-add' onClick={this.addGift}>Add Gift</Button>
            </div>
        );
    }
}

export default App;
