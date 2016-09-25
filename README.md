# elm-localstorage

## Fork that works on elm 0.17

This package provides very lightweight bindings to use the `localStorage` API in the most simple possible way.

The module `LocalStorage` exposes four functions:

### `get : String -> Maybe String`

Get retrieves a key from localStorage. It returns `Maybe String`. The decoding if the value is JSON is left as an exercise to the user since it's not by any means in the scope of the library.

```elm
Debug.log "This is my key" (LocalStorage.get "my-key")
```

### `set : String -> Json.Encode.Value -> Task () ()`

Set receives a string for the key and a JSON value as value and returns a Task that returns an empty tuple that can never fail.

It could not return a task, but since it is a side effect, I thought it was better to return a task even though it is not asynchronous.

```elm
LocalStorage.set "my-key" (Json.Encode.string "something")
```

### `remove : String -> Task () ()`

Remove removes the value with the given key and returns a task that can never fail. For the same reasons as set.

```elm
LocalStorage.remove "my-key"
```

### `clear : () -> Task () ()`

Clear removes everything in localStorage. Why does it receive an empty tuple? Because otherwise it would be a value, not a function.

```elm
LocalStorage.clear ()
```
