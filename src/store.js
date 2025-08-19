import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Crear el store de Redux usando configureStore de Redux Toolkit
const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store; // Exporta el store para usarlo en el Provider
