const adv = document.querySelector('.adv'),
      collection = document.querySelector('.books'),
      books = document.querySelectorAll('.book'),
      body = document.querySelector('body'),
      link = books[4].querySelector('a'),
      ulBooks = collection.querySelectorAll('ul'),
      liBook2 = books[0].querySelectorAll('li');
      liBook5 = books[5].querySelectorAll('li'),
      liBook6 = books[2].querySelectorAll('li'),
      newLi = document.createElement('li');

console.log(liBook6);

collection.prepend(books[1]);
collection.append(books[0]);
collection.append(books[4]);
collection.append(books[3]);
collection.append(books[5]);
collection.append(books[2]);

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

link.textContent = 'Книга 3. this и Прототипы Объектов';

adv.remove();

ulBooks[0].append(liBook2[1]);
ulBooks[0].append(liBook2[0]);
ulBooks[0].append(liBook2[3]);
ulBooks[0].append(liBook2[6]);
ulBooks[0].append(liBook2[8]);
ulBooks[0].append(liBook2[4]);
ulBooks[0].append(liBook2[5]);
ulBooks[0].append(liBook2[7]);
ulBooks[0].append(liBook2[9]);
ulBooks[0].append(liBook2[2]);
ulBooks[0].append(liBook2[10]);

ulBooks[5].append(liBook5[1]);
ulBooks[5].append(liBook5[0]);
ulBooks[5].append(liBook5[9]);
ulBooks[5].append(liBook5[3]);
ulBooks[5].append(liBook5[4]);
ulBooks[5].append(liBook5[2]);
ulBooks[5].append(liBook5[6]);
ulBooks[5].append(liBook5[7]);
ulBooks[5].append(liBook5[5]);
ulBooks[5].append(liBook5[8]);
ulBooks[5].append(liBook5[10]);


newLi.textContent = 'Глава 8: За пределами ES6';

liBook6[9].before(newLi);



