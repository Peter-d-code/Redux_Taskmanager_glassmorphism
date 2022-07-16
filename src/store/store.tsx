import {configureStore } from "@reduxjs/toolkit"
import {Slice, reducer} from "./hook"

export const store= configureStore({
    reducer: {
        RootState : reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch