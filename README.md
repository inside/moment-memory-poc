# moment-memory-poc

A poc repo to demonstrate server side memory consumption with moment

- Installation:
```
git clone https://github.com/inside/moment-memory-poc.git
cd moment-memory-poc
npm install
```
- Run this program with:
```
NODE_ENV=production node --expose-gc ./index.js
```

- Let it run for less than a minute
- Be sure to only have this node process running otherwise replace `$(pgrep node)` by your `pid`
- Clear timers 1 and 2 by sending a signal:
```
kill -USR2 $(pgrep node)
```

- Inspect the RAM in kilobytes used with:
```
ps -p $(pgrep node) -o rss
```

- You should see the amount of RAM is never reallocated.
