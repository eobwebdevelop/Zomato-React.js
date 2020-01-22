import React from "react";
import select from "react-select"
// import { Dropdown } from "semantic-ui-react";
const DropDown = (props) =>  {
    const selectedRes= (e) => props.handleRestaurant(props.restaurants.find(res=> res.name === e.target.value));
    const selectedUser= (e) => {
        props.handleUserType(props.userType.find(user=> user.id === +e.target.value))};
  return ( 
    <div className="restaurantDropDown">
    <select  className="settingsOptionsDrop" value={props.chosenRestaurant.name} onChange={selectedRes}>
        {props.restaurants.map(res => (
            <option 
                key={res.id}>{res.name}
            </option>
        ))}
    </select>
    <select className="user_typeDropDown" value={props.chosenType} onChange={selectedUser}>
        {props.userType.map(user => (
            <option 
                key={user.id}>{user.id}
            </option>
        ))} 
    </select>
    </div> 
    )
}



// const RegionDropDown = props => (
//   <Dropdown
//     placeholder={props.placeholder}
//     fluid
//     selection
//     options={props.selectOptions.map(reg =>(
//       <option> 
//         key={reg.id}>{reg.name}
//       </option>
//     ))}
//   />
// );

export default DropDown;
