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
            </div>
           
        ) 
    }
    setLocalStorage() {
      localStorage.setItem('Arena', 'Selection Month');
    }
}
export default App;
