# ChistaData State Manager
This is a simple state manager based on rxjs.

## Useage

#### Create
```
/* Creates a atomic store based on BehaviorSubject from 'rxjs' */
const count$ = atom(0);
```
#### Subscribe 
```
/* Subscribe to the atomic store and listen for events */
count$.subscribe(value => {
    // Do application logic whenever the store changes
    document.getElementById("counter").innerText = `Count : ${value}`;
});
```
#### Get value
```
count$.get()
```
#### Set value
```
// count$.set(<new-value>);
count$.set(count$.get() + 1);
```
#### Reference Links
- https://rxjs.dev/api/index/class/BehaviorSubject
- https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject


## Get Started
  
#### Install dependencies
```
pnpm install
```

#### Build application
```
pnpm build 
```

#### Testing
```
pnpm test 
```


## Rules

TBD

## Get started

TBD

## Who uses it?

TBD
