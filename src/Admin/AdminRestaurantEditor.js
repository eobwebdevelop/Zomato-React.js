import React, {Component} from 'react';
// import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Select from "react-select"



class AdminRestaurantEditor extends Component  {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        region_id:'',
        restaurant_id: '',
        region: [{id:0, value:''}],
        restaurants: [{id:0, value:''}],
      }
    }
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

      getRestaurants = () => {
        fetch('http://localhost:3000/admin/restaurant')
          .then(response => response.json())
          .then(data => {
            this.setState( (state) => ({ 
              ...state,
              restaurants: data.Restaurant,
            }))
          })
      };

    componentDidMount(){
     this.getRestaurants();
      this.getRegion();
      }

    updateRegion = (item) => {
      console.log(item)
      this.setState({region_id: item})
    }

    updateRestaurant = (item) => {
      this.setState({restaurant_id: item})
  }

  handlerSubmit = (e) => {
    const { restaurant_id, region_id, name } = this.state
    e.preventDefault();
    console.log("the form has been submited with these fields:", restaurant_id, region_id,  );
    fetch("http://localhost:3000/auth/restaurant/edit",
    {
        method:  'POST',
        headers:  new Headers({
                'Content-Type':  'application/json'
        }),
        body:  JSON.stringify(restaurant_id, region_id, name),
    })
    .then(res  =>  res.json())
    .then(
        res  =>  this.setState({"flash":  res.flash}),
        err  =>  this.setState({"flash":  err.flash})
    ) 
  }

  render() {
    console.log(this.state.region_id)
    return (
      <>
        <Container>
          <div className="formparentcontainer">
            <h1 >You are editing a restaurant</h1>
            <hr />
            <form className="restaurant-editor" onSubmit={this.handlerSubmit}>
              <h5>Restaurant Details</h5>
              <Select
                placeholder = "Select your Restaurant"
                value = {this.state.restaurant_id}
                onChange={this.updateRestaurant}
                classNamePrefix="select"
                options={this.state.restaurants.map((item) => ({value: item.id, label: item.name}))}
                />
                <input type="text" name="name" placeholder="Restaurant Name Change" required onChange={this.updateName} /> 
              <Select
                placeholder = "Select your Region" // change placeholder to the current region based on restaurant 
                value = {this.state.region_id}
                onChange={this.updateRegion}
                classNamePrefix="select"
                options={this.state.region.map((item) => ({value: item.id, label: item.name}))} 
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