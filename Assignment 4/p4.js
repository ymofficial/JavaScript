function password(obj){
    if(!obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName')){
        return "Invalid";
    }

    if(obj.birthYear.toString().length !== 4){
        return "Invalid" ;
    }

    const upperCaseSiteName = obj.siteName.charAt(0). toUpperCase() + obj.siteName.slice(1);

    const strongPassword = `${upperCaseSiteName}#${obj.name}@${obj.birthYear}`;

    return strongPassword;
}

console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }));
console.log(password({ name: "rahat" , birthYear: 2002 , siteName: "Facebook" }));
console.log(password({ name: "toky" , birthYear: 200 , siteName: "Facebook" }));
console.log(password({ name: "maisha" , birthYear: 2002}));