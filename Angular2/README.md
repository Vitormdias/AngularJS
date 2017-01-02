# Angular 2 basic tutorial

## Let's create a simple Angular2 app:

### first thing, install angular-cli
```
    npm install -g angular-cli
```

### create a simple project
```
    ng new angular2-fundamentals
```

### enter the created repository
```
    cd angular2-fundamentals
```

### execute it
```
    ng serve
```
* The information that you are seeing in http://localhost:4200/,
  is coming from: angular2-fundamentals/src/app/app.component.ts

### now, let's create a component
```
    ng generate component simple-form --inline-template --inline-style

    OR

ng g c simple-form -it -is
```
* It will create a new directory: angular2-fundamentals/src/app/simple-form

* And also include in the declarations that are in the app.module.ts

```
  declarations: [
    AppComponent,
    SimpleFormComponent
]
```
### Now replace the content in: angular2-fundamentals/src/app/app.component.html:

```
  <div>
    <app-simple-form>

    </app-simple-form>
</div>
```

* Now you are using your component

### Let's modify our component:

* In simple-form.component.ts, replace the template

    ```
      template: `
        <input #myInput type="text">
        <button (click)="onClick(myInput.value)" >Click me</button>
      `
    ```
* #myInput is a ref, a reference, so we can use the value on our onClick function:

* Add it in the export class...

    ```
      onClick(value) {
          console.log(value);
  }
    ```

### You can also use '$event'

* If you add this on your template:

    ```
      <button (click)="onClick($event , myInput.value)" >Click me</button>

    ```
* And this to your function:

    ```
      onClick(event , value) {
          console.log(event);
          console.log(value);
  }
    ```

### Let's create our first service

```
    ng generate service mail

    OR

ng g s mail
```

* It will create some files, but you have to provide to your app, so insert this in app.module.ts, and import it

    ```
      providers: [MailService]
    ```

* And include it on your app.component.ts, and import it

    ```
      constructor(private mail:MailService)
    ```

* Let's add a message attr in our mail.service.ts

    ```
      message = `You've got mail`;
    ```

* You can now use it on your app.component.html

    ```
      <div>
        <app-simple-form>

        </app-simple-form>
  </div>

  {{mail.message}}
    ```

### Another thing we can use to make our code cleaner, is use injections

* So we will replace:

    ```
      providers: [MailService]
    ```

    for this:

    ```
      providers: [{provide: 'mail', useClass:MailService}]
    ```

    * we are now using a object that has a id and the class it is using



* And in the app.component.ts, we can replace this:

    ```
      constructor(private mail:MailService)
    ```

    for this:

    ```
      constructor(@Inject('mail') private mail)
    ```

    and remove the import
