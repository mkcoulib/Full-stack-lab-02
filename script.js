var friends  = ['Mike', 'Alexis', 'Moussa', 'Veronica','Jason'];

for (var i = 0; i < friends.length; i++) {
    console.log (friends[i]);
    for (var j = 99; j>=1; j--){
        var x = j-1;
        if (j>2){
            console.log(j + " lines of code in the file, " + j+ " lines of code; " + friends[i] + " strikes one out, clears it all out, "+ x +" lines of code in the file" );
    } else {
       console.log( j +" line of code in the file, 1 line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file" );
}
    };
};



// 99 lines of code in the file, 99 lines of code; John strikes one out, clears it all out, 98 lines of code in the file
// 1 line of code in the file, 1 line of code; John strikes one out, clears it all out, no more lines of code in the file