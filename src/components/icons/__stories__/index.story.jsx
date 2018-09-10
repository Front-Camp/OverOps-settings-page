import React from 'react';
import { storiesOf } from '@storybook/react';
import {IconBin} from '../icon-bin';
import {IconChevron} from '../icon-chevron';
import {IconClose} from '../icon-close';
import {IconDownload} from '../icon-download';
import {IconEdit} from '../icon-edit';
import {IconEye} from '../icon-eye';
import {IconQuestion} from '../icon-question';
import {IconSetting} from '../icon-setting';

storiesOf('Icons', module)
  .add('Default icons', () => (
    <div>
      <IconBin/>
      <IconChevron/>
      <IconClose/>
      <IconDownload/>
      <IconEdit/>
      <IconEye/>
      <IconQuestion/>
      <IconSetting/>
    </div>
  ));
