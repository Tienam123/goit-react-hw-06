import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.jsx';
//import {GlobalStyle} from '@/GlobalStyle.js';
import './styles/index.css'
import {Provider} from "react-redux";
import {persistor, store} from "@/store/index.js";
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById('wrapper'))
        .render(
            <React.StrictMode>
                <Provider store={store}>
                    <PersistGate persistor={persistor}>
                        <App />
                    </PersistGate>
                </Provider>
            </React.StrictMode>,
        );
