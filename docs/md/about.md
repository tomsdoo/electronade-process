# electronade-process

electronade-process is an npm package that provides the feature about process for electronade.  
See [electronade page](https://electronade.netlify.app/) for the structures of `electronade packages`.

![npm](https://img.shields.io/npm/v/electronade-process)
![NPM](https://img.shields.io/npm/l/electronade-process)
![npms.io (quality)](https://img.shields.io/npms-io/quality-score/electronade-process)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/electronade-process)
![Maintenance](https://img.shields.io/maintenance/yes/2022)

[![](https://nodei.co/npm/electronade-process.svg?mini=true)](https://www.npmjs.com/package/electronade-process)

## install

``` shell
npm install electronade-process
```

## exposed

``` typescript
electronade: {
  process: {
    cwd: () => Promise<string>;
  }
}
```

## usage
``` javascript
console.log(
  await electronade.process.cwd()
);
```
