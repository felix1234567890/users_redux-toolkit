import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";

const store = configureStore({
  reducer,
});
if (import.meta.env.DEV && import.meta.hot) {
  import.meta.hot.accept('./reducers', async () => {
    const newRootReducer = (await import('./reducers')).default;
    store.replaceReducer(newRootReducer);
  });
}
export type AppDispatch = typeof store.dispatch;

export default store;
