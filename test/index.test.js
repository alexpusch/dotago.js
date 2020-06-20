const test = require('ava');
const sinon = require('sinon');
const dotago = require('../index');

test.beforeEach(t => {
  dotago.load();
})

test.afterEach(t => {
  dotago.unload();
})

test('seconds', t => {
  t.is(1..seconds, 1000);
});

test('second', t => {
  t.is(1..second, 1000);
});

test('minutes', t => {
  t.is(1..minutes, 1000 * 60);
});

test('minute', t => {
  t.is(1..minute, 1000 * 60);
});

test('hours', t => {
  t.is(1..hours, 1000 * 60 * 60);
});

test('hour', t => {
  t.is(1..hour, 1000 * 60 * 60);
});

test('days', t => {
  t.is(1..days, 1000 * 60 * 60 * 24);
});

test('day', t => {
  t.is(1..day, 1000 * 60 * 60 * 24);
});

test('weeks', t => {
  t.is(1..weeks, 1000 * 60 * 60 * 24 * 7);
});

test('week', t => {
  t.is(1..week, 1000 * 60 * 60 * 24 * 7);
});

test('floating numbers', t => {
  t.is(1.5.minutes, 1000 * 60 * 1.5);
})

test('negative numbers', t => {
  t.is(-2..minutes, -2 * 1000 * 60);
})

test('seconds ago', t => {
  sinon.useFakeTimers({
    now: 1500000000000
  });

	t.is(1..seconds.ago , 1500000000000 - 1000);
});

test('seconds from now', t => {
  sinon.useFakeTimers({
    now: 1500000000000
  });

	t.is(1..seconds.fromNow , 1500000000000 + 1000);
});

test('asDate', t => {
  t.is(1500000000000..asDate.toISOString() , new Date(1500000000000).toISOString());
})

test('unload', t => {
  dotago.unload();

  t.is(1..seconds, undefined);
})