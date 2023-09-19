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

## Documentation 

Please refer the following links :
- [Framework Agnostic Architecture](https://docs.google.com/document/d/1CMQfp-iWE4nGkO3TGqU659HFqX27TJ7B6lb34BHKOcA/edit?usp=sharing)
- [Portal UI Revamp](https://docs.google.com/document/d/1eEpdSbxBb8ewZpGPRSBRfrqFcxr3EBSXHdg0HxVnvoY/edit#heading=h.ownuxv6cpt09)
- [Microfrontend Architecture](https://docs.google.com/document/d/1A7QBn4cOniawx9ZHdemraYCEDBN4Rol2AYenxyJeys8/edit#heading=h.rvectoksf8tj)
- [Metrics Observability Platform](https://docs.google.com/document/d/1i4GRb-xuDIS4RkKxtD0bjR_6VrYRb711QJ4phC-M564/edit#heading=h.e0hmkwvutp6v)

## Rules

TBD

## Get started

TBD

## Who uses it?

TBD
