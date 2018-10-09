import Stars from './stars';
import ReactDOM from 'react-dom';
import React from 'react';
import Kanban from './kanban';

const App = () => {
  if (window.location.pathname.includes('star')) return <Stars />;
  return <Kanban />
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
); 
