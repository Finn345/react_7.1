import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        make: "Make",
        model: "Model",
        color: "Color",
        year: "Year",
        price: "Price",
        serial_num: "Serial Number"
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseMake: (state, action) => { state.make = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        chooseColor: (state, action) => { state.color = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        chooseSerial: (state, action) => { state.serial_num = action.payload}

    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseMake, chooseModel, chooseColor, chooseYear, choosePrice, chooseSerial} = rootSlice.actions