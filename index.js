// your code here
//Aufgabe 1
let wrapper = document.querySelector('#wrapper');
let wrapperChildren = wrapper.children;

console.log(wrapperChildren);
console.log(wrapperChildren.length);





// //Aufgabe 2
for (let i = 0; i < wrapperChildren.length; i++) {
    const child = wrapperChildren.item(i);

    console.log(child.children);
    console.log(child.children.length);
} 




//Aufgabe 3
const myFunc = () => {
    tempRes = [];

    for (let i = 0; i < wrapperChildren.length; i++) {

        tempRes.push( {
            elementWithMostClasses: wrapperChildren.item(i),
            totalNumberOfClasses: wrapperChildren.item(i).classList.length
        } );
        
    }

    const largestTotalNumberOfClasses = Math.max( ...tempRes.map( el2 => el2.totalNumberOfClasses ) );

    return tempRes.find( el => el.totalNumberOfClasses === largestTotalNumberOfClasses );
}

console.log( myFunc() );
