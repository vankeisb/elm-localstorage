function make(elm) {
  elm.Native = elm.Native || {};
  elm.Native.LocalStorage = elm.Native.LocalStorage || {};

  if (!elm.Native.LocalStorage.values) {
    var Utils = Elm.Native.Utils.make(elm);
    var Maybe = Elm.Maybe.make(elm);
    var Task = Elm.Native.Task.make(elm);

    var getItem = function (item) {
      var val = localStorage.getItem(item);
      return !!val ? Maybe.Just(val) : Maybe.Nothing;
    };

    var setItem = function (item) {
      return function (val) {
        localStorage.setItem(item, val);
        return Task.succeed(Utils.Tuple0);
      };
    };

    var removeItem = function (item) {
      localStorage.removeItem(item);
      return Task.succeed(Utils.Tuple0);
    };

    var clear = function () {
      localStorage.clear();
      return Task.succeed(Utils.Tuple0);
    };

    elm.Native.LocalStorage.values = {
      getItem: getItem,
      setItem: setItem,
      removeItem: removeItem,
      clear: clear
    };
  }

  return elm.Native.LocalStorage.values;
}

Elm.Native.LocalStorage = {};
Elm.Native.LocalStorage.make = make;
