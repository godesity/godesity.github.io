import { configureStore } from '@reduxjs/toolkit'
import customerReducer from './customers'
import projectReducer from './projects'

export default configureStore({
    reducer: {
        customers: customerReducer,
        projects: projectReducer,
    },
})
