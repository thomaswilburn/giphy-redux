import { configureStore } from '@reduxjs/toolkit';
import giphy from './store/giphy.tsx';

import appReducer from './store/appReducer.tsx';
import streamReducer from './store/streamReducer.tsx';

export default configureStore({
  middleware: [ giphy ],
  reducer: {
    app: appReducer,
    stream: streamReducer
  }
});
