function checkName(name) {
    // Check if the input is a string
    if (typeof name !== 'string') {
        return 'invalid';
    }

    // List of names that cannot be pronounced with bangs


    // Check if the name ends with 'ya' or 'iya'
    if (name.endsWith('a') || name.endsWith('A') || name.endsWith('y') || name.endsWith('Y') || name.endsWith('i') || name.endsWith('I')
        || name.endsWith('e') || name.endsWith('E') || name.endsWith('o') || name.endsWith('O') || name.endsWith('u') || name.endsWith('U')
        || name.endsWith('w') || name.endsWith('W') ) {
        return 'Good Name';
    }

    // If the name doesn't match any conditions, consider it a bad name
    return 'Bad Name';
}

// Test cases
console.log(checkName('Salman'));     // Output: Bad Name
console.log(checkName('RAFEE'));      // Output: Good Name
console.log(checkName('Jhankar'));    // Output: Bad Name
console.log(checkName(199));          // Output: invalid
console.log(checkName(["Rashed"]));   // Output: invalid
