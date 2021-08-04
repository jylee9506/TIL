process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    var result = ""
    for(let i=0; i<b; i++){
        result = ""
        for(let j=0; j<a; j++){
            result = result + "*"
        }
        console.log(result)
    }
});


//<--------------------------------------------------------------->


process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }

});
