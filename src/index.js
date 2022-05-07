import ReactDOM from 'react-dom';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
    return (
        <div class="pagina">
            <Header />
            <Main />
            <footer>
                <div class="footer-mobile">
                    <ion-icon name="home"></ion-icon>
                    <ion-icon name="search-outline"></ion-icon>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </footer>
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));