import { configureStore } from '@reduxjs/toolkit'
import todosReducer from  '../../store/todosapp/Reducer'

const store = configureStore({
    reducer: {
        todosReducer
    }
})
export default store