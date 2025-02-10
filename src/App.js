import './App.css';
import React, {useEffect, useMemo, useState} from 'react';
import ReactDOM from "react-dom/client";

import Staff from "./components/Staff";
import Button from './components/Button.js'

const staffData = [
    { id: 1, name: 'staff 1', availableTimes: ['10:00', '11:00', '12:00'] },
    { id: 2, name: 'staff 2', availableTimes: ['12:00', '12:30', '14:00', '18:00'] },
    { id: 3, name: 'staff 3', availableTimes: ['09:00', '11:00', '18:00', '18:15', '19:30'] },
    { id: 4, name: 'staff 4', availableTimes: ['16:00', '20:00'] },
];

function App() {
    const [dynamicRoot, setDynamicRoot] = useState(null);
    const [index, setIndex] = useState(0);

    // useEffect(() => {
    //     const data = staffData[index].availableTimes;
    //     const container = document.getElementById('dynamicRoot');
    //
    //     if (!container) {
    //         console.error("Err");
    //         return;
    //     }
    //
    //     if (!dynamicRoot) {
    //         const newRoot = ReactDOM.createRoot(container);
    //         setDynamicRoot(newRoot);
    //         newRoot.render(<Button times={data}/>);
    //     } else {
    //         dynamicRoot.render(<Button times={data}/>);
    //     }
    // }, [index, dynamicRoot]);

    const data = useMemo(() => {
        return staffData[index].availableTimes
    }, [staffData, index])

    return (
        /*<div className="App">
            <Staff>
                <>
                    {
                        staffData.map((item, index) => [
                            <li
                                key={item.id}
                                className={'liStyle'}
                                onClick={() => setIndex(index)}
                            >
                                {item.name}
                            </li>
                        ])
                    }
                </>
            </Staff>
            <Button times={data}/>
        </div>*/

        <>

        </>
    );
}

export default App;