
function fibsRec(n) {
    console.log("This was printed recursively");
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const prev = fibsRec(n-1);

    const next = prev[prev.length - 1]+ prev[prev.length-2];

    return [...prev, next];

}
  console.log(fibsRec(8))

