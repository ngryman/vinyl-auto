import test from 'ava'
import vauto from '../'

function noop() {}

test('throw error on invalid protocol', t => {
  t.throws(() => vauto.unregister(123), "'protocol' must be a String or null")
})

test('do nothing if protocol does not exist', t => {
  t.notThrows(() => vauto.unregister('nop'))
})

test('unregister a protocol', t => {
  vauto.register('toto', noop, noop)
  vauto.unregister('toto')

  t.throws(() => vauto.src('toto://*.txt'))
  t.throws(() => vauto.dest('toto://*.txt'))
})

test('unregister a default protocol', t => {
  vauto.register(null, noop, noop)
  vauto.unregister(null)

  t.throws(() => vauto.src('*.txt'))
  t.throws(() => vauto.dest('toto://*.txt'))
})
