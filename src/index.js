import React from 'react';
import ReactDOM from 'react-dom/client';
//import Counter from './CounterApp/Counter';
//import App from './TodoList/App';

//import ThemeProvider from "./ThemeToggleApp/ThemeContext";

//import App from './ThemeToggleApp/App';
import QuizApp from './QuizApp/QuizApp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App/> */}
    {/* <Counter/> */}
    {/* <ThemeProvider>
      <App/>
    </ThemeProvider> */}
    <QuizApp/>
  </>
);

