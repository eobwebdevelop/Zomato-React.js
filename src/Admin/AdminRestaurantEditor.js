import React, {Component} from 'react';
import { withRouter}  from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Select from 'react-select';



class AdminRestaurantEditor extends Component  {
    constructor(props) {
      super(props);
      this.state = {
        name: props.restaurant ? props.restaurant.name :  '',
        region_id: props.restaurant ? props.restaurant.region_id : '',
        id: props.restaurant ? props.restaurant.id : '',
        displayregion: '',
      }
    }

  componentDidUpdate(prevProps) {
    if (!prevProps.restaurant && this.props.restaurant) {
      this.setState({
        name: this.props.restaurant.name,
        region_id: this.props.restaurant.region_id,
        id: this.props.restaurant.id,
      })
    }
  }

  updateRegion = (item) => {
    this.setState({
    region_id: item.value,
    displayregion:item })
  }

  updateName = (event) => {
    this.setState({name: event.target.value})
  }

  handlerSubmit = (e) => {
    const { name, region_id, id} = this.state
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/restaurant/edit`,
    {
        method:  'PUT',
        headers:  new Headers({
                'Content-Type':  'application/json'
        }),
        body:  JSON.stringify({id, name, region_id}),
    })
    .then(res  => {
      if (res.status === 200) {
        const editedRestaurant = {
          id: this.state.id,
          region_id: this.state.language_id,
          name: this.state.name,
        }
        this.props.updateRestaurantList(editedRestaurant);
      }
    })
  }

  render() {
    return (
      <>
        <Container>
          <div className="formparentcontainer">
            <h1 > Restaurant name and region editor</h1>
            <hr />
            <form className="restaurant-editor" onSubmit={this.handlerSubmit}>
              <h5>Restaurant Name</h5>
                <input type="text" name="name" value={this.state.name} required onChange={this.updateName} /> 
                <hr />
                <h5>Region </h5>
              <Select // change placeholder to the current region based on restaurant 
                value = {this.state.displayregion}
                onChange={this.updateRegion}
                classNamePrefix="select"
                options={this.props.regions.map((item) => ({value: item.id, label: item.name}))} 
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

export default withRouter(AdminRestaurantEditor);