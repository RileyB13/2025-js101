/*
Back in the stone age (before CSS), we used spaces to align things on the screen. 
If we have a 40-char wide table of Flintstone family members, how can we center
the following title above the table with spaces?
*/

let title = "Flintstone Family Members";
let padding = Math.floor((40 - title.length) / 2);
let centeredTitle = title.padStart(padding + title.length);

console.log(centeredTitle);


