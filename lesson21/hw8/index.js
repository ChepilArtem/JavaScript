export const finishList = () => {
   
    const item1 = document.createElement('li');
    itemOne.textContent = '1';
    document.querySelector('ul').prepend(item1);

    const item4 = document.createElement('li');
    itemFour.textContent = '4';
    document.querySelector('.special').before(item4);

    const item6 = document.createElement('li');
    itemSix.textContent = '6';
    document.querySelector('.special').after(item6);

    const item8 = document.createElement('li');
    itemEight.textContent = '8';
    document.querySelector('ul').append(item8);
};