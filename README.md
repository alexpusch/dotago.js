dotago.js
==========

Silly syntactic sugar for creating relative dates with Javascript

work with dates:
```js
1..minute.ago.asDate // 2020-06-18T09:59:00Z
1..hour.ago.asDate // 2020-06-18T09:00:00Z
1..hour.fromNow.asDate // 2020-06-18T11:00:00Z
```

work with timestamps: 
```js
1..minute.ago // 1592474340000
1..hour.ago // 1592470800000
1..hour.fromNow // 1592478000000
```

just get the duration in ms:
```js
1..second // 1000
1..minute // 6000
1..hour // 3600000
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

console.log(1..hours.fromNow.asDate)
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
