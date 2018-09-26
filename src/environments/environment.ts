// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCfX63xOOwftqQFR1RS7Zs0YBXlC6b0LvU',
    authDomain: 'gyms-be1bf.firebaseapp.com',
    databaseURL: 'https://gyms-be1bf.firebaseio.com',
    projectId: 'gyms-be1bf',
    storageBucket: 'gyms-be1bf.appspot.com',
    messagingSenderId: '183614385243'
  }
};
