const sections = document.querySelectorAll('section');
// console.log(sections);
for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '12px';
    section.style.paddingLeft = "10px";
    section.style.backgroundColor = 'lightGray';
}

const section2 = document.getElementById('section2');
section2.style.backgroundColor ='orange';