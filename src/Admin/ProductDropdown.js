import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const ProductDropDown = (product) => (
  <Dropdown
    placeholder={product}
    fluid
    selection
    // options={props.selectOptions}
  />
);

export default ProductDropDown;
