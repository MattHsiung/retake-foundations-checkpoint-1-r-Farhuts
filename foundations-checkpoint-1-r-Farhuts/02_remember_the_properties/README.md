### Remember The Properties

#### 8 Points

Create the function `rememberTheProperties` that returns a function. The function returned uses a feature in JavaScript that can reference or "remember" values that were defined in the environment it was created in.

When the function returned from `rememberTheProperties` is invoked, it returns an object with two key/value pairs:

```js

const memory = rememberTheProperties();

const objReturned = memory({});

/*

objReturned = {
  newKeys: [],
  memory: {}
}

*/
```

Here are the two keys that are always on the object:

- newKeys: this is an array value. The array holds any new keys that are not on the "memory" object.
- memory: this is an object that holds all the key/value pairs that were ever attached to the argument object.

<hr>
<br>

The function returned from `rememberTheProperties` accepts an object as an argument. If the object has a new key/value pair that isn't stored in the functions "memory", the new key/value pairs are added and since they are new, they are added to the newKeys array.

```js

const memory = rememberTheProperties();

const objReturned = memory({hello: 'world', goodbye: 'goodbye'});

console.log(objReturned) // {newKeys: ['hello', 'goodbye'], memory: {hello: 'world', goodbye: 'goodbye'}}

```

If the object passed in as an argument does not contain key/value pairs or the key is not a new key, the newKeys array should be empty and nothing should
be added to the functions "memory" object.

```js

const memory = rememberTheProperties();

const objReturned = memory({hello: 'world', goodbye: 'goodbye'});

console.log(objReturned) // {newKeys: ['hello', 'goodbye'], memory: {hello: 'world', goodbye: 'goodbye'}};

const newObjReturned = memory({});

console.log(newObjReturned) // {newKeys: [], memory: {hello: 'world', goodbye: 'goodbye'}};

console.log(memory({hello: 'hola'})) // {newKeys: [], memory: {hello: 'world', goodybe: 'goodbye'}}
// Note: Since hello already existed in the functions "internal memory", the key/value pair is ignored since it already exists.

```

<hr>
<br>

Tip: The main portion of this problem is figuring out the relationship between `rememberTheProperties` and the function returned. The function uses a feature
in JavaScript to "remember" the variables it had access to at the time it was created, using this feature is the key to solving this challenge!
