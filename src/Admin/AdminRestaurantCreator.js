import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Select from 'react-select';
import './AdminCreator.css';



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
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/restaurant/create`,
    {
        method:  'POST',
        headers:  new Headers({
                'Content-Type':  'application/json'
        }),
        body:  JSON.stringify({name, region_id}),
    })
    .then(res  => {
      if (res.status === 200) {
        this.props.updateRestaurantCreated();
      }
    })
  }

  render() {
    const { regions } = this.props;
    return (
        <Container>
            <div className="formparentcontainer">
            <h1  className="creator-title"> Add a new Restaurant</h1>
            <hr />
            <form class="restaurant-form" onSubmit={this.handlerSubmit}>
            <h5> Fill in the restaurant name </h5>
              <input type="text" name="name" placeholder= 'Restaurant Name' required onChange={this.updateName} /> 
              <br /> <br />
              <h5> Region of the restaurant </h5>
              <Select
                placeholder = "Select your Region" // change placeholder to the current region based on restaurant 
                value = {this.state.displayregion}
                onChange={this.updateRegion}
                classNamePrefix="select"
                options={regions.map((item) => ({value: item.id, label: item.name}))} 
                />
                <button type="submit" className="btn-login">
                Submit
                </button>
            </form>
          </div>
        </Container>
      )}
  }

export default withRouter(AdminRestaurantCreator);
