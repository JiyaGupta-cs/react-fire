<p align="center">
  <h1 align="center">react-fire</h1>

  ```react-fire``` provides a simple way to integrate firebase authentication in your app. After installing the package and configuring Firebase, it automatically creates a login/signup . You don't need to manually set up , It handles everything for you.

</p>

## Getting Started

To create a new React app with Vite and Tailwind CSS, you can use the following commands:

```
npm create vite@latest my-app -- --template react
cd my-app
npm install
 ```

## Installation

```
npm install react-fire
```

Create a Firebase project and grab the project configurations.

Create a .env file in your project directory and add your Firebase configuration:

```
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=

```

Then create authentication using react-fire

```
react-fire create-auth
```

## Navigation

You can navigate to follwing routes to handle user authentication flows. 
```
/signup
/login 
/signout
```


