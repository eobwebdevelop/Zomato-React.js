import React, {Component} from 'react';
// import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Select from "react-select";



class AdminRestaurantEditor extends Component  {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        region_id:'',
        id: '',
        displayresto: '',
        displayregion: '',
      }
    }

    updateRegion = (item) => {
      console.log(item)
      this.setState({region_id: item.value,
      displayregion:item })
    }

    updateRestaurant = (item) => {
      this.setState({id: item.value,
      displayresto: item})
  }

  updateName = (event) => {
    this.setState({name: event.target.value})
  }

  handlerSubmit = (e) => {
    const { id, name, region_id } = this.state
    e.preventDefault();
    console.log("the form has been submited with these fields:", id, name, region_id);
    fetch("http://localhost:3000/admin/restaurant/edit",
    {
        method:  'PUT',
        headers:  new Headers({
                'Content-Type':  'application/json'
        }),
        body:  JSON.stringify({id, name, region_id}),
    })
    .then(res  =>  res.json())
    .then(
        res  =>  this.setState({"flash":  res.flash}),
        err  =>  this.setState({"flash":  err.flash})
    ) 
  }

  render() {
    const { restaurants, regions } = this.props; 
    return (
      <>
        <Container>
          <div className="formparentcontainer">
            <h1 > Restaurant name and region editor</h1>
            <hr />
            <form className="restaurant-editor" onSubmit={this.handlerSubmit}>
              <h5>Restaurant Details</h5>
              <Select
                placeholder = "Select the Restaurant you want to edit"
                value = {this.state.displayresto}
                onChange={this.updateRestaurant}
                classNamePrefix="select"
                options={restaurants.map((item) => ({value: item.id, label: item.name}))}
                />
                <input type="text" name="name" placeholder="Restaurant new name" required onChange={this.updateName} /> 
                <hr />
                <h5>Region </h5>
              <Select
                placeholder = "Select your Region" // change placeholder to the current region based on restaurant 
                value = {this.state.displayregion}
                onChange={this.updateRegion}
                classNamePrefix="select"
                options={regions.map((item) => ({value: item.id, label: item.name}))} 
                />
                <button type="submit" className="btn-login">
                  Update
                </button>
            </form>
          </div>
        </Container>
      </>
    );
  }
}

export default AdminRestaurantEditor;