Recently, I gave multiple interviews for Senior React.js & Tech Lead roles — here are the Top 10 most common questions I was asked.
 These are basic-level but frequently asked in interviews 👇

1️⃣ Call, Apply, and Bind
 Difference between them + write a polyfill.

2️⃣ Flatten Array (No Array.flat)
 Input : [1,2,3,[4,5,6,[7,8,[10,11]]],9] 
 Output: [1,2,3,4,5,6,7,8,10,11,9]

3️⃣ Inline 5 divs in a row without flex/margin/padding
 (Hint: display: inline-block)

4️⃣ Find sum of numbers without for loop
 Input: [1,2,3,4,5] — (Hint: reduce() or recursion)

5️⃣ Deep Copy vs Shallow Copy (How to achieve this)
 const a = { ab: { cd: { ef: true } } };
 const b = a; const c = { ...a };
 console.log(a === b); console.log(a === c);
 a.ab.cd.ef = false;
 console.log(b.ab.cd.ef); console.log(c.ab.cd.ef); 

6️⃣ Promise & Async/Await Output (More questions I will be posting later) 
 async function chart(v){ 
 console.log("start", v); 
 await console.log("middle", v); 
 console.log("end", v);
 }
 chart("first"); 
 chart("second");

7️⃣ Find first repeating character
 Example: "success" → c

8️⃣ Implement a Stopwatch
 Start, Stop, Reset + live display.

9️⃣ Build a To-Do List (Vanilla JS or React)
 Follow-up: How would you optimize re-renders?

🔟 Currying Function for Infinite Sum.
 sum(10)(20)(30)() Output => 60
 sum(10)(20)(30)(40)(50)(60)() Output => 210