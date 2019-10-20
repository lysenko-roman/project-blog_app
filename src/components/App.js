import React, {useState} from 'react';
//import Footer from './Footer';
//import Header from './Header';

const names = ['vasa', 'pitya', 'alex', 'rudik', 'valera'];

const render = names.map((name, i) => <p key={i}> {name}</p>)
//const namesSort = names.filter(name => name !== 'pitya');
//console.log(namesSort)

//const renderNames = namesSort.map((name, i) => <p key={i}>{name}</p> );

/*const  MyNames = [];
for (let i in names)
const name = names[i];
if (name !== 'pitya') <p key={i}>{name}</p>*/

/*const render = names.reduce((ak, name, i) => {
//console.log(name)
//}, []);
if (name !== 'rudik') {
  ak.push(<p key={i}>{name}</p>)
  return ak;
  }
return ak;
}, []);

//console.log(render);*/


//const renderNamesInner = names.map(name  => `<li>${name}</li>`);
//console.log(renderNamesInner.join(''))
//console.log(renderNamesInner)

function App() {
  
  const [res, setRes] = useState('hello');


  const show = () => {
   // alert('hello my frend!')
  setRes(res + ' world');
}
  return (
    <div id='app'>
      <h2 onClick = {show}>Hello app</h2>
      {res}
    </div>
  );
}

export default App;
