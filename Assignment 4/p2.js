function checkName(name){
    if(typeof name !== 'string'){
        return "Invalid Input!";
    }

    if (name.endsWith('a') || name.endsWith('A') || name.endsWith('y') || name.endsWith('Y') || name.endsWith('i') || name.endsWith('I')
    || name.endsWith('e') || name.endsWith('E') || name.endsWith('o') || name.endsWith('O') || name.endsWith('u') || name.endsWith('U')
    || name.endsWith('w') || name.endsWith('W') ) {
    return 'Good Name';
    }
    return 'Bad Name';
}
 console.log(checkName('Salman'));
 console.log(checkName('RAFEE'));
 console.log(checkName('Jhankar'));
 console.log(checkName(199));
 console.log(checkName(["Rashed"]));