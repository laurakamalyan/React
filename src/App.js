import './App.css';
import React, {useMemo, useState} from 'react';

import Staff from "./components/Staff";
import Button from './components/Button.js'

// const staffData = [
//     { id: 1, name: 'staff 1', availableTimes: ['10:00', '11:00', '12:00'] },
//     { id: 2, name: 'staff 2', availableTimes: ['12:00', '12:30', '14:00', '18:00'] },
//     { id: 3, name: 'staff 3', availableTimes: ['09:00', '11:00', '18:00', '18:15', '19:30'] },
//     { id: 4, name: 'staff 4', availableTimes: ['16:00', '20:00'] },
// ];

function App() {
    // const [index, setIndex] = useState(0);

    // const data = useMemo(() => {
    //     return staffData[index].availableTimes
    // }, [staffData, index])

    return (
        <div className="App">




            {/*<Staff>*/}
            {/*    <>*/}
                    {/*{*/}
                    {/*    staffData.map((item, index) => [*/}
                    {/*        <li*/}
                    {/*            key={item.id}*/}
                    {/*            className={'liStyle'}*/}
                    {/*            onClick={() => setIndex(index)}*/}
                    {/*        >*/}
                    {/*            {item.name}*/}
                    {/*        </li>*/}
                    {/*    ])*/}
                    {/*}*/}
                {/*</>*/}
            {/*</Staff>*/}
            {/*<Button times={data}/>*/}
        </div>
    );
}

export default App;