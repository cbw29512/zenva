import React from 'react';
import ReactDom from 'react-dom';

function HelloWorld({name}) {
    return (
        <h1>Hello, {name}</h1>
    );
 }


//  function Hello() {
//      const isHello = false;
//      return (<span>
//             {isHello && 'Hello' }
//             {!isHello && 'not Hello' }
//         </span>);
//  }

// function Morgan() {
//     const fName = 'Morgan';
//     const lName = 'McKie';
//     return (
//         <Person age = {105}
//             name = {fName + " " + lName}/>
//     );
// }

// const Person = props => <h1>{props.name+' '+props.age}</h1>
  
 ReactDom.render(
    <HelloWorld name="Morgan"/>
 ,document.querySelector('#root'));