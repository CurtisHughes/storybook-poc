import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { Button } from '../node_modules/dist/app.bundle.js';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={() => console.log('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={() => console.log('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));
