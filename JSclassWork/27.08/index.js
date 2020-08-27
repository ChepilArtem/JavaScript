//input: domString - string that contains css selector
//ouput: htmlElement - element in html
// const btns = document.querySelector('.btn');

const btns = document.querySelectorAll('.btn');


//BAD!!!
// btns[0].addEventListener('click' handleBtnClick);
// btns[1].addEventListener('click' handleBtnClick);

btns.forEach(btn => {
    //lose context example
    //const obj = {
    //   name: "Some user"
    //}
    //btn.addEventlistener('click', handleBtnClick.bind(obj));
    btn.addEventlistener('click', handleBtnClick);
})


function handleBtnClick(event) {
    // console.log(this);
    // console.log(`hello, ${this.name}`);
    console.log(event.target.innerText);
}