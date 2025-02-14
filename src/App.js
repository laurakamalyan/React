import './App.css';
import React, {useMemo} from 'react';

import Staff from "./components/Staff";
import Button from './components/Button.js'

import {useDispatch, useSelector} from "react-redux";
import action from './actions/action'

function App() {
    const staffData = useSelector(state => state.data);
    const index = useSelector(state => state.selectedStaffIndex);

    const dispatch = useDispatch();

    const data = useMemo(() => {
        return staffData[index].availableTimes
    }, [staffData, index]);

    return (
        <div className="App">
            <Staff>
                {
                    staffData.map((item, index) => [
                        <li
                            key={item.id}
                            className={'liStyle'}
                            onClick={() => dispatch(action(index))}
                        >
                            {item.name}
                        </li>
                    ])
                }
            </Staff>

            <Button times={data}/>
        </div>
    );
}

export default App;