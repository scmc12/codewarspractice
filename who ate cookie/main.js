cookie = (x) =>
  `Who ate the last cookie? It was ${
    { string: "Zach", number: "Monica" }[typeof x] || "the dog"
  }!`;
