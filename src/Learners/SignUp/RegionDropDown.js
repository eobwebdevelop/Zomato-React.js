import React from 'react';
import { Dropdown } from 'semantic-ui-react';
const RegionDropDown = (props) => (
  <Dropdown
    placeholder={props.placeholder}
    fluid
    selection
    options={props.selectOptions}
  />
);
export default RegionDropDown;