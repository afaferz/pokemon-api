import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from './common/theme/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/home';
import Pokemon from './pages/pokemon';
import * as serviceWorker from './serviceWorker';

// New way to render
const app = document.getElementById('root');
const root = createRoot(app!);

const router = (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/pokemon" element={<Pokemon />}>
                <Route path=":pokemonId"></Route>
            </Route>
            <Route path="quizz"></Route>
        </Routes>
        <App />
    </BrowserRouter>
);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>{router}</Provider>
        </ThemeProvider>
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
