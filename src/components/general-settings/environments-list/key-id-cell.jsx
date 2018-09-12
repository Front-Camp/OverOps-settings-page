import * as React from 'react';
import {hideCharacters} from '../../table/utils';
import {IconEye} from '../../icons';

import styles from './environments-list.scss';

export const KeyIdCell = ({item, toggle}) => (
  <span
    key="key_id"
    style={{display: 'flex'}}
    className={styles['key-id-cell']}>
    <span
      style={{
        overflowX: 'auto',
        padding: '5px'
      }}>
      {item.show ? item.full_key : hideCharacters(item.full_key)}</span>
      <span onClick={toggle} style={{position: 'relative', top: '-5px', marginLeft: '10px'}}>
        <IconEye color={item.show ? 'grey3' : 'blue1'} />
      </span>
    </span>
);
