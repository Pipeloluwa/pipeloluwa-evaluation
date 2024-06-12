import { configureStore } from "@reduxjs/toolkit";
import mobile_button from "./reducers/mobile_button";



export const store= configureStore(
    {
        reducer:{
            mobile_button: mobile_button,
        }
    }
);

export type RootState= ReturnType<typeof store.getState>;
// export type AppDispatch= typeof store.dispatch;
