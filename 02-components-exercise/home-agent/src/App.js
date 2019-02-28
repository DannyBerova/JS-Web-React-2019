import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Street from './components/Street/Street';
import House from './components/House/House';
import HouseDetails from './components/HouseDetails/HouseDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streets: [],
      selectedStreetIdx: 0,
      selectedHouseIdx: 0,
      hasFetched: false
    }
    this.getSelectedStreet = this.getSelectedStreet.bind(this);
    this.getSelectedHouse = this.getSelectedHouse.bind(this);
    this.streetHoverEvent = this.streetHoverEvent.bind(this);
    this.houseHoverEvent = this.houseHoverEvent.bind(this);
  }

  
  componentDidMount() {
    fetch('http://localhost:9999/feed/street/all')
    .then(res => res.json())
    .then(data => {
      this.setState({
        streets: data.streets,
        hasFetched: true
      })
      console.log('Mount',this.state)
    })
  }

  getSelectedStreet() {
    if(this.state.hasFetched) {
      return this.state.streets[this.state.selectedStreetIdx].homes;
    } 
      return [];
  }
  
  getSelectedHouse() {
    if(this.state.hasFetched) {
    return this.state.streets[this.state.selectedStreetIdx].homes[this.state.selectedHouseIdx];
    } 
    return {};
  }

  streetHoverEvent(idx) {
    this.setState({
      selectedStreetIdx: idx
    })
  }

  houseHoverEvent(idx) {
    this.setState({
      selectedHouseIdx: idx
    })
  }
  
  render() {

    let afterDbFetch = this.state.hasFetched ? (
      <div className="streets">
      <h2>Streets</h2>
      {this.state.streets.map((street, idx) => {
        return (<Street location= {street.location} key={idx} id={idx} streetHoverEvent={this.streetHoverEvent}/>)
      })}
    </div>
    ) : ( <div className="streets">
            <h4>Check if server is running!</h4>
          </div>)
    let afterFetchStreet = this.state.hasFetched ? (
      <div className="houses">
        <h2>Houses</h2>
        {this.getSelectedStreet().map((home, idx) => {
          return (<House type={home.type} description= {home.description} imageUrl= {home.imageUrl} price= {home.price} key={idx} id={idx} houseHoverEvent={this.houseHoverEvent.bind(this)}/>)
        })}
      </div>
    ) : ( <div className="streets">
            <h4>Check if homes on that street!</h4>
          </div>)

    let afterFetchHouse = this.state.hasFetched ? (
      <div className="HouseDetails">
        <HouseDetails type={this.getSelectedHouse().type} description={this.getSelectedHouse().description} imageUrl={this.getSelectedHouse().imageUrl} price={this.getSelectedHouse().price} key={this.state.selectedHouseIdx} />
      </div>
    ) : ( <div className="streets">
            <h4>Check if house selected!</h4>
          </div>)

    return ( 
      <div className = "App" >
      {afterDbFetch}
      {afterFetchStreet}
      {afterFetchHouse}
    </div>
    );
  }
}

export default App;