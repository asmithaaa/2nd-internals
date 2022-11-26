import { React, useState } from 'react';
import Select from 'react-select';
import './Dropdown.css';
function Dropdown ()
{
    const colors = [
        {
            id: 1,
            label: "Lime",
        },
        {
            id: 2,
            label: "Lavender",
        },
        {
            id: 3,
            label: "Crimson",
        },
        {
            id: 4,
            label: "Darkblue",
        },
        {
            id: 5,
            label: "Teal",
        },
        {
            id: 6,
            label: "Rebecca purple",
        },
        {
            id: 7,
            label: "Ghost White",
        },
        {
            id: 8,
            label: "Aqua Marine",
        },
        {
            id: 9,
            label: "Alice Blue",
        },
    ]

    const [color, setColor] = useState("");

    const click = (event) => {
        setColor(event.label);
    }
    return (
        <div className='dropdownWrapper'>
            <style>
            {
                `.button 
                {
                 background-color:` + color + ';'
                }
            </style>

            <center>
            <h1>Color Changer</h1>
            </center>
            
            <div className="dropdownContainer">
               <center><Select options={colors} onChange={click} className='select' placeholder="Select Color"></Select></center>
            </div>
            <div className="block">
                <center>
                    <button className='button'></button>
                </center>
            </div>
        </div>

    );
}
export default Dropdown;
