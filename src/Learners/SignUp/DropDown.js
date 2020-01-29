import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';


const DropDown = ({ placeholder }, { selectOptions }) => (
  <Dropdown
    placeholder={placeholder}
    fluid
    selection
    options={selectOptions}
  />
);

DropDown.propTypes = { placeholder: PropTypes.string.isRequired };

export default DropDown;
