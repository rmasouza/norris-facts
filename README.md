# **Chuck Norris Facts**

## **How to run** 

Before trying to execute this project, firs rename exemple.env file to .env.

After that, to install and run simple execute

```bash
yarn --production=false
yarn start

#or 
 
npm install
npm start
```

this app is also avaliable at [norris.romulomessias.dev/](https://norris.romulomessias.dev/)

## **Folder Scructure**

```bash
project
└─── src
    └─── assets
    └─── components
    └─── models
    └─── pages
    └─── stores
    └─── styles
```

- src 

    Root folder of all my source code, in this folder there is the entry point of the app as well.

- assets

    Here there is the template html used to hosting the react app. Here there is also the icones used in app manifest and the favico.

- components

    All the ui pieces that compose a page is here, I like to organize all components by domain. Domain free componentes I tend to put in **common** folder. Other costume I have is to keep together compoments and styles. So for every component there is also a file with its styles.

- models

    Definition for objects I use in this project. Usually, this definitions are API responses.

- pages

    All pages that the aplication have. Here a page is basically a container fot a components of a domain I considered.


- stores

    Here is all logic for state managment I used in this app. All related to Mobx.

- styles

    Common styles, mixins and breakpoints used in all styles.
