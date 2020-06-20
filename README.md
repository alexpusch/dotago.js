dotago.js
==========

Silly syntactic sugar for creating relative dates and time durations with Javascript

Work with dates:
```js
// now: 2020-06-18T10:00:00Z
1..minute.ago.asDate // 2020-06-18T09:59:00Z
2..hours.ago.asDate // 2020-06-18T08:00:00Z
3..hours.fromNow.asDate // 2020-06-18T13:00:00Z
```

Work with timestamps: 
```js
// now: 2020-06-18T10:00:00Z
1..minute.ago // 1592474340000
1..hour.ago // 1592470800000
1..hour.fromNow // 1592478000000
```

Just get the duration in milliseconds:
```js
1..second // 1000
1..minute // 6000
1..hour // 3600000
```

Do math
```js
// now: 2020-06-18T10:00:00Z
(1..hour.ago + 2..minutes).asDate // 2020-06-18T09:02:00Z
```

How does it work? 
-----------------
Our beloved javascript allows us to run methods on primitive numbers. The thing is that `1.foo()` is parsed as an illegal flout number. 

`1.` translates into `1.0` and so `1..foo()` translates into `1.0.foo()` which is totally legal Javascript. 


Usage
-----
`npm i --save dotago`

```js
require('dotago');

console.log(2..hours.fromNow.asDate)
```

API
----
We add the following getter methods to Number.prototype
- second/seconds
- minute/minutes
- hour/hours
- day/days
- week/weeks
- ago
- fromNow
- asDate
