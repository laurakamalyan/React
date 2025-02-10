import './App.css';
import React, {useState} from 'react';
import ReactDOM from "react-dom/client";

import Staff from "./components/Staff";
import Button from './components/Button.js'

const staffData = [
    { id: 1, name: 'staff 1', availableTimes: ['10:00', '11:00', '12:00'], },
    { id: 2, name: 'staff 2', availableTimes: ['12:00', '12:30', '14:00', '18:00'], },
    { id: 3, name: 'staff 3', availableTimes: ['09:00', '11:00', '18:00', '18:15', '19:30'], },
    { id: 4, name: 'staff 4', availableTimes: ['16:00', '20:00'], },
];

function App() {
    const [dynamicRoot, setRoot] = useState(null);

    const renderComponent = (index) => {
        let data = staffData[index].availableTimes;

        const container = document.getElementById('dynamicRoot');
        if (!container) {
            console.error("Err");
            return;
        }

        if (!dynamicRoot) {
            const newRoot = ReactDOM.createRoot(container);
            setRoot(newRoot);
            newRoot.render(<Button times={data}/>);
        } else {
            dynamicRoot.render(<Button times={data}/>);
        }
    }

    const staffItems = staffData.map((item, index) => [
        <li
            key={item.id}
            className={'liStyle'}
            onClick={() => renderComponent(index)}
        >
            {item.name}
        </li>
    ]);

    return (
        <div className="App">
            <Staff staffItems={staffItems}/>
            <div id="dynamicRoot"></div>
        </div>
    );
}

export default App;