import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import GroceryListLive from './components/Grocery/GroceryListLive';
import BasketListLive from './components/Basket/BasketListLive';

import BasketICon from './assests/icons/basket.svg';
import './CSS/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">

				<header className="App-header">
					{/* <i className="fa fa-shopping-basket fa-6" aria-hidden="true"></i> */}
					<img alt="Basket Icon" src={BasketICon}/>
					<h1 className="App-title">Deep Thought Basket Application</h1>
				</header>

				{/* <nav>
					<form>
						<input type="text" name="filterIt" defaultValue="filter for e.g. Apple onChange (not implemented)" onChange={this.addToBasket} />
					</form>
				</nav> */}

                <main>
					<GroceryListLive />
					<BasketListLive />
                </main>

				<Footer />

            </div>
        );
    }
}

export default App;