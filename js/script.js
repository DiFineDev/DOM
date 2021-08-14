const DomElement = function(){
    selector = 0;
    height = 0;
    width = 0;
    bg = 0;
    fontSize = 0;
}

DomElement.prototype.createElem = function(selector, height, width, bg, fontSize){

    selector = selector.trim();
    console.log('hello');

    if(selector[0] === '.') {
        let newElem = document.createElement('div');
        newElem.classList.add(selector.slice(1));
        newElem.innerHTML = 'Hello!';
        newElem.style.cssText = `
            height: ${height}px;
            width: ${width}px;
            background: ${bg};
            font-size: ${fontSize}px;
        `;
        divCollection = document.querySelector('.div-collection');
        divCollection.insertAdjacentElement('afterbegin', newElem);

    } else if (selector[0] === '#'){

        let newElem = document.createElement('p');
        newElem.setAttribute('id', selector.slice(1));
        newElem.innerHTML = 'Hello!';
        newElem.style.cssText = `
            height: ${height}px;
            width: ${width}px;
            background: ${bg};
            font-size: ${fontSize}px;
        `;
        pCollection = document.querySelector('.p-collection');
        pCollection.insertAdjacentElement('afterbegin', newElem);
    }

};


const div = new DomElement();

div.createElem('#test', 200, 200, '#808080', 20);
div.createElem('.test', 200, 200, '#808080', 20);


