# geotic-bug
repro case for a bug

```
cd geotic-bug
npm i
npm start
```

Navigate to http://localhost:8080 in your browser. Open the developer console. You should see the follow bug:

`Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions`

See comments in `index.js`
