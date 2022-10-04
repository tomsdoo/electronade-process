# electronade-process

It's a package for electronade that provides some feature of Node.js process class.  
See [electronade-process.netlify.app](https://electronade-process.netlify.app/) for details.

![npm](https://img.shields.io/npm/v/electronade-process)
![NPM](https://img.shields.io/npm/l/electronade-process)
![npms.io (quality)](https://img.shields.io/npms-io/quality-score/electronade-process)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/electronade-process)
![Maintenance](https://img.shields.io/maintenance/yes/2022)

[![](https://nodei.co/npm/electronade-process.svg?mini=true)](https://www.npmjs.com/package/electronade-process)


# Installation
``` shell
npm install electronade-process
```

# What Exposed
``` typescript
electronade: {
  process: {
    cwd: () => Promise<string>;
  }
}
```

# Usage
See electronade usage for details.  
An example in renderer goes below.

``` javascript
console.log(
  await electronade.process.cwd()
); // same as cwd()

```
