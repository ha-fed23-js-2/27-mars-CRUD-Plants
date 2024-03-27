import { create } from "zustand";

export const useStore = create((set) => ({
    plants: [],
    // funktion för att lägga till en planta
    addPlant: (plant) =>
        set((state) => ({
            plants: [
                ...state.plants,
                {
                    id: Date.now(),
                    name: plant.name,
                    type: plant.type,
                    color: plant.color,
                    care: plant.care,
                    info: plant.info,
                    isSown: plant.sown
                }
            ]
        })),
    // funktion för att ta bort en planta
    deletePlant: (id) =>
        set((state) => ({
            plants: state.plants.filter((plant) => plant.id !== id)
        })),
    // uppdatera en planta
    updatePlant: (updatedPlant) =>
        set((state) => ({
            plants: state.plants.map((plant) => plant.id === updatedPlant.id ? {
                ...plant,
                name: updatedPlant.name,
                info: updatedPlant.info,
                care: updatedPlant.care,
                color: updatedPlant.color,
                isSown: updatedPlant.sown,
                type: updatedPlant.type
            } : plant)
        }))
}))