# electronade-process

It's a package for electronade that provides some feature of Node.js process class.

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
