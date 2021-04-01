import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="App"> 
                 <button
                 type="button"
                 onClick={this.setLocalStorage}>
                     Save storage
                 </button>
                 <button
                 type="button"
                 onClick={this.getLocalStorage}>
                   Get storage
                 </button>
            </div>
           
        ) 
    }
    setLocalStorage() {
      localStorage.setItem('Arena', 'Selection Month');
    }
    getLocalStorage() {
      let myLocalStorageData = localStorage.getItem('Arena');
      
      return [myLocalStorageData];
    }
}
export default App;
