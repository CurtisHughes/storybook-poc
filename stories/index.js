import React from 'react';
import { storiesOf } from '@storybook/react';
import { OpeningScript, Button } from '../node_modules/dist/app.bundle.js';
import ButtonMarkdown from '../src/components/Button/Button.md';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={() => console.log('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={() => console.log('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ), { notes: { markdown: ButtonMarkdown } } );

storiesOf('OpeningScript', module)
  .add('with only opening script text', () => (
    <OpeningScript 
        customerFirstName={''}
        customerLastName={''}
        technicianFirstName={''}
        openingScriptText={'Hello! My name is {{technicianFirstName}} and I will be your ATT Protech. Am I speaking with {{customerFirstName}}?'}
    />
  ))
  .add('with customer first name', () => (
    <OpeningScript
        customerFirstName={'fName'}
        customerLastName={'lName'}
        technicianFirstName={''}
        openingScriptText={'Hello! My name is {{technicianFirstName}} and I will be your ATT Protech. Am I speaking with {{customerFirstName}}?'}
    />
  ))
  .add('with all info', () => (
    <OpeningScript
        customerFirstName={'fName'}
        customerLastName={'lName'}
        technicianFirstName={'tName'}
        openingScriptText={'Hello! My name is {{technicianFirstName}} and I will be your ATT Protech. Am I speaking with {{customerFirstName}}?'}
    />
  ));
