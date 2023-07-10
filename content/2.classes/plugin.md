# Plugin

## Overview

| Methods       |
| ------------- |
| [load](#load) |

## Methods

#### • load()

> Returns: `void`
>
> | Parameter | Type                          |
> | --------- | :---------------------------- |
> | manager   | [Manager](../classes/manager) |

# Example

::code-group

::code-block{label="Using Plugins" code}

```javascript
const { Manager } = require("magmastream");
const MyPlugin = require("my-magmastream-plugin");

const manager = new Manager({
  plugins: [new MyPlugin({ foo: "bar" })],
});
```

::
::code-block{label="Writing Plugins" code}

```javascript
const { Plugin } = require("magmastream");

module.exports = class MyPlugin extends Plugin {
  constructor(options) {
    super();
    this.options = options; // will be { foo: 'bar' }
  }

  load(manager) {}
};
```

::
::
