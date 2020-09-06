import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/getAllCentres');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/submitCentre', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        centres:{
          "centreId":null,
          "name":"box hill",
          "street":"terry  street",
          "city":"sydney",
          "state":"NSW",
          "zipCode":"2000",
          "locations":[{
              "locationId":null,
              "name":"top wing",
              "description":"3 rd floor near to Apple show room",
              "assets":{
                  "assetId":null,
                  "name":"adv1",
                  "description":"adverstimenet 1 deatils",
                  "width":200,
                  "height":100,
                  "length":50,
                  "status":'A'
              }
          },{
              "locationId":null,
              "name":"bottom wing",
              "description":"2 rd floor near to Tesla show room",
              "assets":{
                  "assetId":null,
                  "name":"adv2",
                  "description":"adverstimenet 2 deatils",
                  "width":200,
                  "height":500,
                  "length":150,
                  "status":'I'
              }
  
          }
          ]
  
      }
    
    }),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };

  retrieveData = async e => {
    e.preventDefault();
    const response = await fetch('/api/getCentrebyId?Id=' + this.state.post+'&username=admin&password=admin')

    const json = await response.text();

    this.setState({ responseToPost: json });

  };

  retrieveAssetsData = async e => {
    e.preventDefault();
    const response = await fetch('/api/getCentrebyAssets?Id=' + this.state.assetData)

    const json = await response.text();

    this.setState({ responseToPost: json });

  };

  render() {
    return (
      <div className="App">
       
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>oOh Media Application</strong>
          </p>
         
          <button type="submit">Save Data</button>
        </form>

     <br></br>

        <form onSubmit={this.retrieveData}>
          <h3> centre Data</h3>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Retrieve</button>
        </form>

        <form onSubmit={this.retrieveAssetsData}>
          <h3> Assets Data</h3>
          <input
            type="text"
            value={this.state.assetData}
            onChange={e => this.setState({ assetData: e.target.value })}
          />
          <button type="submit">Retrieve</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default App;
