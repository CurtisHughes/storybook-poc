import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../node_modules/dist/app.bundle.js';
import ButtonMarkdown from '../src/components/Button/Button.md';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={() => console.log('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={() => console.log('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ), { notes: { markdown: ButtonMarkdown } } );
