
# co-monk

  MongoDB with generator goodness.

## Installation

```
$ npm install co-monk
```

## Setup

  Call `wrap()` on collections to make them generator friendly:

```js
var monk = require('monk');
var wrap = require('co-monk');
var db = monk('localhost/test');

var users = wrap(db.get('users'));
```

## Example

  Simple example:

```js
yield users.remove({});

yield users.insert({ name: 'Tobi', species: 'ferret' });
yield users.insert({ name: 'Loki', species: 'ferret' });
yield users.insert({ name: 'Jane', species: 'ferret' });

var res = yield users.findOne({ name: 'Tobi' });
res.name.should.equal('Tobi');

var res = yield users.find({ species: 'ferret' });
res.should.have.length(3);
```

  Parallel inserts:

```js
yield users.remove({});

yield [
  users.insert({ name: 'Tobi', species: 'ferret' }),
  users.insert({ name: 'Loki', species: 'ferret' }),
  users.insert({ name: 'Jane', species: 'ferret' })
];

var res = yield users.findOne({ name: 'Tobi' });
res.name.should.equal('Tobi');

var res = yield users.find({ species: 'ferret' });
res.should.have.length(3);
```

# License

  MIT