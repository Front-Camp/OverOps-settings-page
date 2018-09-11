import React from 'react';
import { storiesOf } from '@storybook/react';
import {IconBin} from '../icon-bin';
import {IconChevron} from '../icon-chevron';
import {IconClose} from '../icon-close';
import {IconDownload} from '../icon-download';
import {IconEdit} from '../icon-edit';
import {IconEye} from '../icon-eye';
import {IconQuestionCircleOutline} from '../icon-question-circle-outline';
import {IconQuestionCircle} from '../icon-question-cirlce';
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
      <IconQuestionCircleOutline/>
      <IconQuestionCircle/>
      <IconSetting/>
    </div>
  ));
