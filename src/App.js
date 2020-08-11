import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  {
    title: 'What is love ?',
    content: "Baby don't hurt me, no more"
  },
  {
    title: 'Any idea ?',
    content: 'No, not at all'
  },
  {
    title: 'Last one ?',
    content: 'Leave me alone'
  }
];

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Blue',
    value: 'blue'
  },
  {
    label: 'The Color Green',
    value: 'green'
  }
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        // <Dropdown
        //   selected={selected}
        //   onSelectedChange={setSelected}
        //   options={options}
        //   label="Select a color"
        // />
        <Translate />
      ) : null}
    </div>
  );
};
