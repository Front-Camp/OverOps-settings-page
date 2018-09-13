import React from 'react';
import { storiesOf } from '@storybook/react';
import Spinner from '../index';

storiesOf('Spinner', module)
  .add('spinner', () => (
    <Spinner active={true} />
  ));
