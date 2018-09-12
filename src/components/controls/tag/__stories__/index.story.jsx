import React from 'react';
import { storiesOf } from '@storybook/react';
import Tag from '../index';


storiesOf('Tag', module)
  .add('simple tag', () => (
    <Tag>Some info</Tag>
  ))
  .add('with onClose handler', () => {
    function onCloseHandler()  {
      alert('on close handler');
    }
    return <Tag onClose={onCloseHandler}>Closable tag</Tag>;
  });
