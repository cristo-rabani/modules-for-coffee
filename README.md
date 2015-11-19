# Universe Modules For Coffee

## Installation

```sh
meteor add universe:modules-for-coffee
```

# Examples

```coffeescript
using('/some/module')(module) ->
  console.log module

using('/some/module', '{universe:collection}')(mod1, mod2) ->
  console.log mod1, mod2
```

## License

This package is released under the MIT license.
