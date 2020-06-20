function defineUnit(name, ratio) {
  Object.defineProperty(Number.prototype, name, {
    writeable: false,
    configurable: true,
    get: function() { return this * ratio }
  });
}

function load() {
  defineUnit('seconds', 1000);
  defineUnit('second', 1000);
  defineUnit('minutes', 1000 * 60);
  defineUnit('minute', 1000 * 60);
  defineUnit('hours', 1000 * 60 * 60);
  defineUnit('hour', 1000 * 60 * 60);
  defineUnit('days', 1000 * 60 * 60 * 24);
  defineUnit('day', 1000 * 60 * 60 * 24);
  defineUnit('weeks', 1000 * 60 * 60 * 24 * 7);
  defineUnit('week', 1000 * 60 * 60 * 24 * 7);

  Object.defineProperty(Number.prototype, 'ago', {
    writeable: false,
    configurable: true,
    get: function() { return Date.now() - this }
  });

  Object.defineProperty(Number.prototype, 'fromNow', {
    writeable: false,
    configurable: true,
    get: function() { return Date.now() + this }
  });

  Object.defineProperty(Number.prototype, 'asDate', {
    writeable: false,
    configurable: true,
    get: function() { return new Date(this) }
  });
}

function unload() {
  ['second', 'seconds', 'minute', 'minutes', 'hour', 'hours', 'day', 'days', 'week', 'weeks', 'ago', 'fromNow', 'asDate'].forEach((key) => {
    delete Number.prototype[key]
  })
}

module.exports = { load, unload }
