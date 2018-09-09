# Contributing

## Project structure

## Dependencies

* `NodeJS` >= v8.2.1
* `NPM` >= v5.3.0

## Git

We are using ["Gitflow Workflow"](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

### Branch Naming Convention

**Features** - `feature` branches should be named as `feature/issue-id` 
(eg. `feature/INX-123`). If feature doesn't have an issue associated with it, 
use lowercase words separated by minus "-" (eg. `feature/optimize-build-performance`)

**Bugs/Defects** - `issue` branches should be named as `issue/issue-id` 
(eg. `issue/INX-123`). `issue` branch **MUST** contain issue id in its name.


### Commit Message Convention

Commit messages should include issue reference in its message as first line together with 
description in parenthesis (issue summary) followed by an empty line and explanation of what 
was done (using imperative form)

eg.
```
INX-123 (This is Issue Summary)

Update something to something
```

If commit does not corresponds to any issue, include explanation message only

eg.
```
Refactor test coverage reports generation
```

## Coding Rules

### CSS

CSS class names convention is BEM

[BEM](http://getbem.com/) - "Block Element Modifier" is a methodology that helps you to create 
reusable components and code sharing in front-end development

CSS import must be a last in the imports block:

```javascript
import * as React from 'react';

import styles from './your-awesome.scss';
```

### JS
  
