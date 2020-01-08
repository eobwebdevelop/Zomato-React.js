import React from "react";

import { Dropdown } from 'semantic-ui-react';

const languageOptions = [
    { key: 'English', text: 'English', value: 'English' },
    { key: 'Portuguese', text: 'Portuguese', value: 'Portuguese' },

  ]
  
  const DropdownSelector = () => (
    <Dropdown
      button
      className='icon'
      floating
      labeled
      icon='world'
      options={languageOptions}
      text='English'
    />
    
  )

  

  export default DropdownSelector