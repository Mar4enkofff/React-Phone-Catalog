import React from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { CartContextProvider } from './components/contexts/CartContextProvider';
import { FavContextProvider } from './components/contexts/FavContextProvider';
import App from './App';

// ReactDOM.render(
//   <Router>
//     <CartContextProvider>
//       <FavContextProvider>
//         <App />
//       </FavContextProvider>
//     </CartContextProvider>
//   </Router>,
//   document.getElementById('root')
// );

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Router>
    <CartContextProvider>
      <FavContextProvider>
        <App />
      </FavContextProvider>
    </CartContextProvider>
  </Router>
);
