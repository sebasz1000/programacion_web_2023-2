# Standard

Go to the [Standard Npm documentation](https://www.npmjs.com/package/standard) for more info


## Why Standard and Rules

Not convinced to use a lintern? So, you should read this and know how it works:
https://standardjs.com/readme-esla.html

## Configuration Standard + Vite in VS Code

1. **[ESLint by Microsoft Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)** must be installed within VS Code


2. In console within the app folder structure **install standard as a dev dependency** to be added in package.json

```
npm i -D standard
```

3. Within package.json file add this configuration lines:

```
“eslintConfig": {
  "extends": "standard", 
}
``` 

4. In order to use **standard auto fix when file is saved**, go to **VS Code settings _(settings.json)_** and add or modify this lines with **true** values:

``` 
...
 "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
 ...
```

> [!NOTE]
> This settings configuration keys depends of the VS Code version

***That's all! Happy Coding! ***