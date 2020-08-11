import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../config';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');

  useEffect(() => {
    const getTranslation = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: API_KEY
          }
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };
    if (language && text) getTranslation();
  }, [language, text]);

  return <div>{translated}</div>;
};

export default Convert;
