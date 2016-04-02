module Main (..) where

import LocalStorage exposing (..)
import Html exposing (div)
import Json.Encode exposing (string)
import Task
import Debug


main : Html.Html
main =
  let
    _ =
      clear ()

    _ =
      remove "bar"

    k =
      Debug.log "Foo entry" (get "foo")

    g =
      Debug.log "Bar entry" (get "bar")

    j =
      Debug.log "Baz entry" (get "baz")

    _ =
      set "foo" (string "bar")

    _ =
      set "bar" (string "baz")
  in
    div [] []
