# Easy Json Database - Browser

This database is used for the **[Scratch For Discord](https://github.com/Androz2091/scratch-for-discord)** project.
This is the same as [easy-json-database](https://github.com/Androz2091/easy-json-database) but the data is not persistent.

## Example

```js
const db = new Database();

// Set data
db.set("Hello", "World");

db.get("Hello"); // World

// Delete data
db.delete("Hello");

db.get("Hello"); // undefined

db.set("age", 10);
db.add("age", 1); // 11
db.subtract("age", 9); // 2

db.set("array", [ "apple" ]);
db.push("array", "orange"); // [ "apple", "orange" ]
```
