let n = 5;

for (let i = n - 1; i >= 0; i--) {
    let num = 1;

    for (let j = 0; j <= i; j++) {
        process.stdout.write(num.toString());
        num = num * (i - j) / (j + 1);
    }

    console.log();
}