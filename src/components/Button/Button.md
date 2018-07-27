### Usage
This is how you would import and use this component:

```javascript
import React, { Component } from 'react';
import { Button } from 'storybook-poc';

export default class App extends Component {
  render () {
    return (
      <div>
        <Button onClick={() => console.log('clicked')}>Submit</Button>
      </div>
    );
  }
}
```
