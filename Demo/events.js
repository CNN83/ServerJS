const EventEmitter = require('events')

// const emitter = new EventEmitter()

// emitter.on('Просто название события', data => {
//   console.log('ON: Просто название события', data)
// })

// emitter.emit('Просто название события', {a: 1})
// emitter.emit('Просто название события', {a: 2})

// setTimeout( () => {
//   emitter.emit('Просто название события', {a: 3})
// }, 1000)


// class
class Dispatcher extends EventEmitter {

  // method
  subscribe(eventName, cb) {

    console.log('[Subscribe...]')
    this.on(eventName, cb)
  }

  // method
  dispatch(eventName, data) {

    console.log('[Dispatching...]')
    this.emit(eventName, data)
  }

}

const dis = new Dispatcher()

// сначала прослушиваем события
dis.subscribe('aa', data => {
  console.log('ON: aa', data)
})

// потом dispatch
dis.dispatch('aa', {aa: 22})