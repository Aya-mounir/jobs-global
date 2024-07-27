# JobsAssessment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Important note

In list and Details component there are no data beacuse of the api does not paginate and response data contain nulls
So i can replace any not found data with message
 
## project details
-project created with angular 17 and all dependencies stable with this version.
   -using tailwind css for ui.
   -primeng for components like (dialog-icons).
   -auth guard for login.
   -state managemnet for sharing user between components (job details , job application):
      *actions: (load - reset).
      *model: (job interface).
      *selector: (select user).
      *reducer: (control load and reset job).
    -scss for styling.
    -shared components like :(navbar - job Dialog).
    -make register - login - list - filter - view details and apply an application.
    -make a unit test using karma .


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
