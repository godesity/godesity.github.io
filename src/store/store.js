import { configureStore } from '@reduxjs/toolkit'
import customersReducer from './customers'
import projectsReducer from './projects'
import postReducer from './post'

export default configureStore({
    reducer: {
        customers: customersReducer,
        customer: postReducer,
        projects: projectsReducer,
        project: postReducer,
    },
})
