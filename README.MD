# Docson demo

```
npm install
npm start
```

Goto http://localhost:3000/app

## How to use

Click on json schemas so that their content is loaded in the first section and their URL is referenced in the second section.

Then you have the choice to load the docson rendering from the text by clicking `Load from schema` or by the URL by clicking `Load from URL` 

## Problems

1. schemas load using '$ref' at the root do not load correctly: click on any `ref` link and `Load from schema`

2. when ID is defined on a schema, the context is lost when loading a sub schema: click on latest `refWithId` and `Load from schema`. The referenced `address.json` is in 404 because loaded from a bad location.
