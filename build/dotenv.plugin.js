const { SyncHook } = require('tapable')
// class dotenvPlugin {
//   this.hooks =
// }

let syncHook = new SyncHook(['name', 'age'])

syncHook.tap('1', (name, age) => console.log('1', name, age))
syncHook.tap('2', (name, age) => console.log('2', name, age))
syncHook.tap('3', (name, age) => console.log('3', name, age))

syncHook.call('edward', 18)
