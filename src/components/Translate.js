import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
import { useDebounced } from '../helpers';

const options = [
  {
    label: 'French',
    value: 'fr'
  },
  {
    label: 'Spanish',
    value: 'es'
  },
  {
    label: 'Deutsch',
    value: 'de'
  }
];

const Translate = () => {
  const [selected, setSelected] = useState(options[0]);
  const [text, debouncedText, setDebouncedText] = useDebounced('', 1000);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter your text</label>
          <input
            value={text}
            onChange={(e) => setDebouncedText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
        label="Select a language"
      />
      <hr />
      <h3 className="ui header">Translation</h3>
      <Convert language={selected} text={debouncedText} />
    </div>
  );
};

export default Translate;
