// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
const pEl = document.createElement('p');
const h3El = document.createElement('h3');
const h1El = document.createElement('h1');
const p1El = document.createElement('p');

const divEl = document.createElement('div');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

// add style to p element
pEl.style.color = 'red';
pEl.textContent = 'Hey I\'m red!';
p1El.textContent = 'ME TOO!';
h1El.textContent = 'I\'m in a div';
h3El.style.cssText = 'color: blue';
h3El.textContent = 'I\'m a blue h3!';

divEl.cssText = "border:black; background-color:pink ";
divEl.append(h1El,p1El);

// container.appendChild(content);
// container.appendChild(pEl);
container.append(content,pEl,h3El,divEl);

btn.addEventListener('click', function (e) {
  console.log(e);
});

