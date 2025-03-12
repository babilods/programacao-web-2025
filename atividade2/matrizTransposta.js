function transporMatriz(A) {
    
    console.log("Matriz Original:");
    A.forEach(row => console.log(row.join(' ')));

    
    const At = A[0].map((_, colIndex) => A.map(row => row[colIndex]));
    

    console.log("Matriz Transposta:");
    At.forEach(row => console.log(row.join(' ')));
}

const A = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(A);
