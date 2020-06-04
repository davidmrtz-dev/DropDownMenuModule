# Izidropdown

> This is  an open source project based on a module to easly implement customizable drop-down menus.

![screenshot](./ok.gif)

## Installation

First you will need to install this module.

`npm install izidropdown --save-dev`

In order to import and use this module from within JavaScript, you need to install and add the [style-loader](https://webpack.js.org/loaders/style-loader) and [css-loader](https://webpack.js.org/loaders/css-loader) to your [module configuration](https://webpack.js.org/configuration/module).

`npm install --save-dev style-loader css-loader`

Also you need to install and add the [sass-loader](https://webpack.js.org/loaders/sass-loader/).

`npm install sass-loader sass webpack --save-dev`

Add the SASS module into your [module configuration](https://webpack.js.org/configuration/module).

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
};
```

## Getting Started

Import the sass file that comes within the module into your index.js file, this file add animations requiered for the dropdown menus also add some customs styles.
Depending on where you index.js file is located, you have to specify the path of the scss module file.
In this case we assume that the index.js file is inside the src folder.

`import '../node_modules/izidropdown/scss/style.scss';`

Next you have to import the Menu object from the module.

'import Menu from 'izidropdown';'

## Usage

### JS

Next you have to define an instance of the object.

`const menuObj = Menu;`

This module was created keeping in mind the simplicity, so to get this work you only need one line of code.

`menuObj.scanForMenu();`

### HTML

This module works with the use of classes like popular frameworks as bootstrap.

## Built With

- Webpack
- ES6
- SASS

## Live Demo

[Live Demo Link :rocket:](#) 
- Coming soon. :construction_worker:

## Authors

👤 **David Elí**

- Github: [@davitomix](https://github.com/davitomix)
- Twitter: [@davitomix007](https://twitter.com/davitomix007)
- Linkedin: [David Garcia](https://www.linkedin.com/in/davideligarcia/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

ISC.
