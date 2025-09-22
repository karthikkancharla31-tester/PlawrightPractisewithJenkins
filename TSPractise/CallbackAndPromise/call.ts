/*Great question, Karthik 👍
Let’s go step by step with **examples + description** for:

* ✅ Callbacks
* ✅ Promises
* ✅ Async / Await

---

# 🔹 1. Callbacks

### 📖 Description

* A **callback** is a function passed as an argument to another function.
* It is executed **after the main function finishes**.
* Used heavily in **older Node.js code** (before Promises and async/await).

---*/

//### ✅ Example: Callback

//```typescript
function fetchData(callback: (data: string) => void) {
  console.log("Fetching data...");
  setTimeout(() => {
    callback("Here is your data");
  }, 2000);
}

fetchData((result) => {
  console.log("Callback received:", result);
});

/*```

👉 Output:

```
Fetching data...
Callback received: Here is your data   (after 2 sec)
``` */

/*⚡ Problem: **Callback Hell** (when you have multiple nested callbacks, code becomes messy).

---

# 🔹 2. Promises

### 📖 Description

* A **Promise** is an object representing the eventual **success (resolve)** or **failure (reject)** of an asynchronous operation.
* It improves readability compared to callbacks.
* States:

  * `pending` → still running
  * `fulfilled` → resolved successfully
  * `rejected` → failed

--- */

//### ✅ Example: Promise

//```typescript
function fetchDataPromise(): Promise<string> {
  return new Promise((resolve, reject) => {
    console.log("Fetching data...");
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Here is your data");
      } else {
        reject("Error: Failed to fetch data");
      }
    }, 2000);
  });
}

fetchDataPromise()
  .then((result) => console.log("Promise resolved:", result))
  .catch((error) => console.log("Promise rejected:", error));
/*```

👉 Output:

```
Fetching data...
Promise resolved: Here is your data   (after 2 sec)
```

⚡ Better than callbacks because it avoids deeply nested code.

--- */

/*# 🔹 3. Async / Await

### 📖 Description

* **Async/await** is syntactic sugar on top of Promises.
* `async` makes a function return a Promise.
* `await` pauses execution until a Promise resolves.
* Code looks more like synchronous code (easier to read).

--- */

//### ✅ Example: Async / Await 

//```typescript
async function fetchDataAsync() {
  try {
    console.log("Fetching data...");
    const result = await new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) {
          resolve("Here is your data");
        } else {
          reject("Error: Failed to fetch data");
        }
      }, 2000);
    });
    console.log("Async/Await received:", result);
  } catch (error) {
    console.log("Caught error:", error);
  }
}

fetchDataAsync();
/*```

👉 Output:

```
Fetching data...
Async/Await received: Here is your data   (after 2 sec)
```*/

/*⚡ Much cleaner, easier to handle errors with `try/catch`.

---

# 🔎 Summary Table

| Concept         | Description                                           | Example Usage                 |
| --------------- | ----------------------------------------------------- | ----------------------------- |
| **Callback**    | Function passed into another function, executed later | `fs.readFile("file.txt", cb)` |
| **Promise**     | Object representing eventual success/failure          | `fetch().then().catch()`      |
| **Async/Await** | Cleaner way to work with Promises using `await`       | `const data = await fetch()`  |

---

*/
