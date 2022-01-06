const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const para = document.createElement('p');
para.setAttribute('style', 'color: red');
para.textContent = "Hey I'm Red";

const head3 = document.createElement('h3');
head3.setAttribute('style', 'color: blue');
head3.textContent = "Hey I'm Blue";

container.appendChild(content);
container.appendChild(para);
container.appendChild(head3);

const subContent = document.createElement('div')
subContent.setAttribute('style', 'border: 5px solid black; background-color: pink');

container.appendChild(subContent);

const head1 = document.createElement('h1');
head1.textContent = 'I\'m in a div'

const para2 = document.createElement('p');
para2.textContent = 'ME TOO!';

subContent.appendChild(head1);
subContent.appendChild(para2);