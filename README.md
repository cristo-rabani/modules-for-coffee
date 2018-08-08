<h1 align="center">
    <a href="https://github.com/vazco">vazco</a>/Universe Modules For Coffee
</h1>

&nbsp;

### Installation

```sh
meteor add universe:modules-for-coffee
```

### Examples

```coffeescript
using('/some/module') (module) ->
  console.log module

do using('{universe:collection}') (module) ->
  console.log module

using('/some/module', '{universe:collection}') (mod1, mod2) ->
  console.log mod1, mod2
```

### License

<img src="https://vazco.eu/banner.png" align="right">

**Like every package maintained by [Vazco](https://vazco.eu/), Universe Modules For Coffee is [MIT licensed](https://github.com/vazco/uniforms/blob/master/LICENSE).**
