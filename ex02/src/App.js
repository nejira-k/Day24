import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="App"> 
                 <button
                 type="button"
                 onClick={this.setMyStorage}>
                     Save storage
                 </button>
                 <button
                 type="button"
                 onClick={this.getMyStorage}>
                   Get Storage
                 </button>
            </div>
           
        ) 
    }
    setMyStorage() {
      document.cookie = "Year=2021";
      localStorage.setItem('Paragon', 'yes, but Arena first');
      sessionStorage.setItem('frontend', 'React');
    }
    getMyStorage() {
      let myCookieData = document.cookie.split('=')[1];
      let myLocalStorageData = localStorage.getItem('Paragon');
      let mySessionStorage = sessionStorage.getItem('frontend');
      
      return [myCookieData, myLocalStorageData, mySessionStorage];
    }
}
export default App;
