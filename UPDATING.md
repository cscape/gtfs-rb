# How to update bindings

You should generally only do this when the GTFS Realtime spec changes. This process will also create relevant bindings for any `.proto` protocol buffer spec if you replace the `gtfs-realtime.proto` file.

## Guide

Make sure you have all dependencies installed

```bash
npm install
```

Regenerate the language binding source from gtfs-realtime.proto

```bash
npm build
```

Update the version number in `package.json`

```json
{
  "version": "0.5.1"
}
```

Publish the package to NPM:

```bash
npm publish
```
