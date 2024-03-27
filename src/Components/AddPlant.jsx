import { useState } from "react";
import { useStore } from "../data/store";

function AddPlant() {
    const { addPlant } = useStore((state) => { return { addPlant: state.addPlant } });

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [care, setCare] = useState('');
    const [color, setColor] = useState('');
    const [info, setInfo] = useState('');
    const [sown, setSown] = useState(false);

    function handleAdd() {
        const newPlant = {
            name: name,
            type: type,
            care: care,
            color: color,
            info: info,
            sown: sown
        };
        addPlant(newPlant);
    };

    return (
        <article>
            <h2>Add new plant:</h2>
            <label>Name:</label>
            <input type='text' onChange={(e) => setName(e.target.value)}></input>
            <label>Type:</label>
            <input type='text' onChange={(e) => setType(e.target.value)}></input>
            <label>Care:</label>
            <input type='text' onChange={(e) => setCare(e.target.value)}></input>
            <label>Color:</label>
            <input type='text' onChange={(e) => setColor(e.target.value)}></input>
            <label>Info:</label>
            <input type='text' onChange={(e) => setInfo(e.target.value)}></input>
            <label>Sown:</label>
            <input type='checkbox' onChange={(e) => setSown(e.target.checked)}></input>
            <button onClick={handleAdd}>ADD</button>
        </article>
    )
}
export default AddPlant;