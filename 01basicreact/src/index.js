import ReactDOM from 'react-dom/client';
import React from 'react';
// import App from './App';

const reactElement={
  type:'a',
  props:{
      href:'www.google.com',
      target:'blank',
      children:"Click Me",
      style:{
        color:'red',
      }
  },
}

 const  MyApp=()=>{
  return (
    <h1>MY REACT APP</h1>
  )
}

function App() {
  return (
   <h1>Basic React App</h1>
  );
}

const anotherReactElement=<a href=''>Click me</a>

// export default App;

const actualReactElement=React.createElement(reactElement.type,reactElement.props)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  <MyApp/>
    // MyApp()
    // <App/>
    // App()
//  anotherReactElement
actualReactElement
);

