Object.groupBy ??= function (items, callbackFn) {
  if (items == null) {
    throw new TypeError('Cannot convert undefined or null to object')
  }

  const obj = Object(items)
  const result = {}

  for (let i = 0; i < obj.length; i++) {
    const key = callbackFn(obj[i], i, obj)
    if (!(key in result)) {
      result[key] = []
    }
    result[key].push(obj[i])
  }

  return result
}

Map.groupBy ??= function (items, callbackFn) {
  if (items == null) {
    throw new TypeError('Cannot convert undefined or null to object')
  }

  const result = new Map()
  const obj = Object(items)

  for (let i = 0; i < obj.length; i++) {
    const key = callbackFn(obj[i], i, obj)
    if (!result.has(key)) {
      result.set(key, [])
    }
    result.get(key).push(obj[i])
  }

  return result
}
