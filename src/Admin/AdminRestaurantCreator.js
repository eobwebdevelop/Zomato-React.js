import React, {Component} from 'react';
// import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Select from "react-select";


class AdminRestaurantCreator extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      name: 'resto1',
      region_id: '',
      displayregion: '',
      region: [{id:0, value:''}],
    }
  };

  getRegion = () => {
    fetch('http://localhost:3000/admin/region')
      .then(response => response.json())
      .then(data => {
        this.setState( (state) => ({ 
          ...state,
          region: data.Region,
        }))
      })
  };

  componentDidMount(){ 
  this.getRegion();
  };

  updateRegion = (item) => {
      this.setState({
        region_id: item.value,
        displayregion:item })
    }

  updateName = (event) => {
    this.setState({name: event.target.value})
  }

  handlerSubmit = (e) => {
    const {name, region_id} = this.state
    e.preventDefault();
    console.log("the form has been submited with these fields:",  );
    fetch("http://localhost:3000/admin/restaurant/create",
    {
        method:  'POST',
        headers:  new Headers({
                'Content-Type':  'application/json'
        }),
        body:  JSON.stringify({name, region_id}),
    })
    .then(res  =>  res.json())
    .then(
        res  =>  this.setState({"flash":  res.flash}),
        err  =>  this.setState({"flash":  err.flash})
    ) 
  }

  render() {
    return (
        <Container>
            <div class="formparentcontainer">
            <h1 > Add a new Restaurant</h1>
            <hr />
            <form class="signup-form" onSubmit={this.handlerSubmit}>
            <h5> Fill in the restaurant name </h5>
              <input type="text" name="name" placeholder= 'Restaurant Name' required onChange={this.updateName} /> 
              <br /> <br />
              <h5> Region of the restaurant </h5>
              <Select
                placeholder = "Select your Region" // change placeholder to the current region based on restaurant 
                value = {this.state.displayregion}
                onChange={this.updateRegion}
                classNamePrefix="select"
                options={this.state.region.map((item) => ({value: item.id, label: item.name}))} 
                />
                <button type="submit" class="btn-login">
                Submit
                </button>
            </form>
          </div>
        </Container>
      )}
  }

export default AdminRestaurantCreator;
