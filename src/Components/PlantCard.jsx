import { useState } from "react";
import { useStore } from "../data/store"

export default function PlantCard({ plant }) {
    const { deletePlant, updatePlant } = useStore((state) => { return { deletePlant: state.deletePlant, updatePlant: state.updatePlant } });
    const [editMode, setEditMode] = useState(false);
    const [plantName, setPlantName] = useState(plant.name);
    const [plantInfo, setPlantInfo] = useState(plant.info);
    const [plantCare, setPlantCare] = useState(plant.care);
    const [plantColor, setPlantColor] = useState(plant.color);
    const [plantSown, setPlantSown] = useState(plant.sown);
    const [plantType, setPlantType] = useState(plant.type);

    function handleEditPlant() {
        let updatedPlant = {
            id: plant.id,
            name: plantName,
            info: plantInfo,
            care: plantCare,
            color: plantColor,
            sown: plantSown,
            type: plantType
        };
        updatePlant(updatedPlant);
        setEditMode(false);
    }

    return (
        <article>
            {editMode ?
                <>
                    <label>NAME:</label>
                    <input type="text" defaultValue={plantName} onChange={(e) => setPlantName(e.target.value)}></input>
                    <label>INFO:</label>
                    <input type="text" defaultValue={plantInfo} onChange={(e) => setPlantInfo(e.target.value)}></input>
                    <label>TYPE:</label>
                    <input type="text" defaultValue={plantType} onChange={(e) => setPlantType(e.target.value)}></input>
                    <label>COLOR:</label>
                    <input type="text" defaultValue={plantColor} onChange={(e) => setPlantColor(e.target.value)}></input>
                    <label>CARE:</label>
                    <input type="text" defaultValue={plantCare} onChange={(e) => setPlantCare(e.target.value)}></input>
                    <label>SOWN:</label>
                    <input type="checkbox" defaultValue={plantSown} onChange={(e) => setPlantSown(e.target.checked)}></input>
                    <button onClick={() => deletePlant(plant.id)}>DELETE PLANT</button>
                    <button onClick={handleEditPlant}>SAVE PLANT</button>
                </>
                :
                <>
                    <h2>NAME: {plant.name}</h2>
                    <p>INFO: {plant.info}</p>
                    <p>TYPE: {plant.type}</p>
                    <p>COLOR {plant.color}</p>
                    <p>CARE: {plant.care}</p>
                    <p>SOWN: {plant.isSown ? "Yes" : "No"}</p>
                    <button onClick={() => deletePlant(plant.id)}>DELETE PLANT</button>
                    <button onClick={() => setEditMode(true)}>EDIT PLANT</button>
                </>
            }
        </article>
    )
}
