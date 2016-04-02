module LocalStorage (get, set, remove, clear) where

import Native.LocalStorage
import Json.Decode exposing (Value)
import Task exposing (Task)


set : String -> Value -> Task () ()
set key val =
  Native.LocalStorage.setItem key val


get : String -> Maybe String
get key =
  Native.LocalStorage.getItem key


remove : String -> Task () ()
remove key =
  Native.LocalStorage.removeItem key


clear : () -> Task () ()
clear =
  Native.LocalStorage.clear
