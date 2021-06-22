import logo from './logo.svg';
import './App.css';
import {SelectBox} from "./components/SelectBox";

function App() {
    const options = [
        {name: 'Paige', value: 1},
        {name: 'Daeen', value: 2},
        {name: 'Jenny', value: 3}]

    const onSelected = (item) => {
        console.info(`selected item value ${item}`)
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo}  className="App-logo" alt="logo"/>
                <p>
                    <SelectBox onSelect={onSelected}
                               selectedValue={options[2].value}
                               options={options}/>
                </p>
            </header>
        </div>
    );
}

export default App;

