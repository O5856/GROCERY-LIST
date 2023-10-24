import { Component } from "react";
import check from './images/checkmark.png'

export class GroceryList extends Component {
    state = {
        userInput: "",
        groceryList: []

    }

    onChangeEvent(e) {
        this.setState({ userInput: e })

    }

    addItem(input) {

        if (input === '') {
            alert('Please enter an item')
        }
        else {
            let listArray = this.state.groceryList;
            listArray.push(input)
            this.setState({ groceryList: listArray, userInput: '' })
        }
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({ groceryList: listArray })
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input type="text"
                            placeholder="What do you want to buy today?"
                            onChange={(e) => { this.onChangeEvent(e.target.value) }}
                            value={this.state.userInput} />
                    </div>

                    <div>
                        <button className="btn add" onClick={() => this.addItem(this.state.userInput)}>ADD</button>
                    </div>
                    <ul>
                        {this.state.groceryList.map((item, index) =>
                            (<li onClick={this.crossedWord} key={index}><img src={check} width="20px" alt="check-mark"/> {item}</li>))
                        }
                    </ul>
                    <div>
                        <button className="btn delete " onClick={() => this.deleteItem()}>Reset the list</button>
                    </div>
                </form>
            </div >

        )
    }
}