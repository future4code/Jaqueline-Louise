import React from 'react';
import './App.css';
import Post from './components/Post/Post';



class App extends React.Component {
    render() {
        return ( <
            div className = { 'app-container' } >
            <
            Post nomeUsuario = { 'LouiseJ' }
            fotoUsuario = {''}
            fotoPost = { 'https://picsum.photos/200/150' }
            /> < /div >
        );
    }
}


   


export default App;