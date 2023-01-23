[4, 5, 6, 7].at(1); // 5
[4, 5, 6, 7].push(8); // [4, 5, 6, 7, 8]
[4, 5, 6, 7].pop(); // [4, 5, 6]
[4, 5, 6, 7].fill(1); // [1, 1, 1, 1]
[4, 5, 6, 7].join(' '); // '4 5 6 7'
[4, 5, 6, 7].reverse(); // [7, 6, 5, 4]
[4, 5, 6, 7].shift(); // [5, 6, 7]
[4, 5, 6, 7].unshift(3); // [3, 4, 5, 6, 7]
[4, 5, 6, 7].includes(6); // true
[4, 5, 6, 7].map((item) => 2 * item); // [8, 10, 12, 14]
[4, 5, 6, 7].filter((item) => item > 5); // [6, 7]
[4, 5, 6, 7].find((item) => item > 5); // 6 (first match)
[4, 5, 6, 7].every((item) => item === 5); // true
[4, 5, 6, 7].findIndex((item) => item === 5); // 1
[4, 5, 6, 7].reduce((prev, curr) => prev + curr, 0); // 2
[4, 5, 6, 7].some((item) => item === 7); //true
