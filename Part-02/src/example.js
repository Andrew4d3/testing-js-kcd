// (1) Now we have prettier installed as dev-dependecy. Let's disorganize the formating here and then run:
// $ npx prettier --write src/example.js
// You will see how all the formating gets restored immediately
const foo = "Freddy";
typeof foo === "string";

if (!("serviceWorker" in navigator)) {
  // you have an old browser :-(
}

const greeting = "hello";
console.log(`${greeting} world!`);
[(1, 2, 3)].forEach(x => console.log(x));

// (2) But there's not need to use a command to run prettier. You can use through vscode. Just enable the extension and change to "format on save"
