import * as React from 'react';
import './OpeningScript.scss';

interface Props {
  technicianFirstName: string;
  customerFirstName: string;
  customerLastName: string;
  openingScriptText: string;
}

const OpeningScript = (props: Props) => {
  const openingScriptMap: Object = {
    technicianFirstName: props.technicianFirstName || '______',
    customerFirstName: props.customerFirstName || '______',
    customerLastName: props.customerLastName || '______'
  };

  const formatOpeningScriptText = (map: Object = {}, openingScriptText: string = '') => Object.keys(map)
    .reduce((text, key) => text.replace(`{{${key}}}`, map[key]), openingScriptText);

  return (
    <ul
      className={(props.openingScriptText) ? 'openingScript' : 'hiddenOpeningScript'}
      id="OpeningScript"
      key="OpeningScript"
    >
      <li
        className={'openingScriptItem'}
      >
        <span
          className={'openingScriptIcon'}
        />
        <span>
          {formatOpeningScriptText(openingScriptMap, props.openingScriptText)}
        </span>
      </li>
    </ul>
  );
};

export default OpeningScript;