# suitcx
It's like [`classnames`][classnames], but for [SuitCSS][suitcss] components.

## Example

```js
// returns 'ChatMessage ChatMessage--unread'
suitcx('ChatMessage', { unread: true })
```

```js
// returns 'Button Button--colorPrimary Button--hollow
suitcx('Button', { color: 'primary', hollow: true })
```

```js
// returns 'Panel Panel--anchorTop is-active'
suitcx('Panel', { anchor: 'top' }, { active: true })
```

## Parameters

### `parent` (string)

The base SuitCSS class name to use. For example, `ChatMessage` or `Modal-header`.

### `modifiers` (object, optional)

An optional object representing the SuitCSS modifiers to apply.

For each key/value pair of the object:

- if the value is a string, then the modifier applied will be composed of the key and value, camel-cased together,
- otherwise, if the value is truthy, then the key will be used as the modifier name.

For example, the following `modifiers` parameter results in the modifiers, `alignLeft`, `colorDarkBlue` and `hollow` to be applied:

```js
{
  align: 'left',
  color: 'darkBlue',
  hollow: true,
  rounded: false
}
```

### `state` (object, optional)

An optional object representing the SuitCSS state to apply.

For each key/value pair of the object, if the value is truthy, then the key will be applied as the state.

For example, the following `state` parameter results in the state `is-active is-hovered` to be applied:

```js
{
  active: true,
  hovered: true,
  pressed: false
}
```

[classnames]: https://www.npmjs.com/package/classnames
[suitcss]: https://www.npmjs.com/package/suitcss
