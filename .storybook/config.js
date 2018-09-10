import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.story.jsx/);
const loadStories = () => req.keys().forEach(req);

configure(loadStories, module);
