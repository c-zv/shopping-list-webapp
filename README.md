# Shopping list web application
## Introduction
This project was created for learning purposes where I can explore new tecnologies/libraries and try new ideas. The idea of the application is to allow the user to manage its shopping lists providing the following features:
- have different lists for different categories (technology, food, etc.);
- manage shopping lists: create, edit, remove, duplicate;
- add/remove products to/from a list;
- view products from different stores;

## Tecnologies used
- JavaScript (ES6)
- Webpack
- Babel
- ESLint
- Axios
- React
- React-router
- Redux
- Redux-saga
- Reselect
- SASS modules
- Ant Design
- Jest
- React Testing Library

## Project configurations
### Webpack
The project was built from scratch usign Webpack and the corresponding configurations are defined in the following files:
- **webpack.common.js** - common configuration for development and production.
- **webpack.dev.js** - specific configuration for development (no code minification, hot module replacement, easy code inspection in browser DevTools).
- **webpack.prod.js** - specific configuration for production (code minification).

### Babel
Babel configs are defined in **.babelrc** file.

### ESLint
ESLint configs are defined in **.eslintrc** file. The project follows the airbnb ESLint rules.

### VSCode
VSCode configs are defined in **jsconfig.json**.


## Project structure
### Root folder (**/**)
- **dist** folder - created when project is built
- **src** folder - all the source code
Also includes all configuration files for Webpack, Babel, ESLint and VSCode.

### Source folder (**/src**)
- **index.js** file - entry point that binds the react app with main react html element.
- **index.html** file - template with main react html element. 
- **index.global.scss** file - global SASS styles (webpack recognizes all files that ends with **.global.scss** as global styles).
- **ant-design-theming.js** file - file used by webpack to overide the default ant-design theme variables.
- **assets** folder - logos, images, etc.
- **components** folder - contains react components.
- **routes** folder - defines and handles the routing logic. Is organized by pages/views in the application.
- **state** folder - defines state related logic (actions, reducers, sagas, etc.). Is organized by resource type (ex: products, shopping lists, etc.).
- **utils** folder - contains shared helpers.

### Components folder (**/src/components**)
Each component is defined in a separate folder which is named as the corresponding component (capitalized).

For a component named SimpleComponent a typical structure is:


    SimpleComponent/                    -> folder which is named as the corresponding component (capitalized);
      index.jsx                         -> exports the SimpleComponent;
      SimpleComponent.jsx               -> SimpleComponent should be defined here;
      simpleComponent.scss              -> scss module for SimpleComponent;
      simpleComponent.test.js           -> tests for SimpleComponent;
      components/                       -> subcomponents used by SimpleComponent (cannot have subcomponents to avoid deep nesting);
        index.jsx                       -> exports all subcomponents;
        AuxComponent/                   -> example of auxiliar component used by SimpleComponent. Follows the same structure as main component, but without subcomponents to avoid deep nestings;
      hooks/                            -> folder with hooks used by SimpleComponent;
        index.jsx                       -> exports useSimpleComponentHook;
        useSimpleComponentHook.jsx      -> main hook used by SimpleComponent. Typically will import and use other hooks, so the component only needs to import the main hook;
        useSimpleComponentHook.test.js  -> tests for useSimpleComponentHook
