const result = document.querySelector('#result');
const filter = document.querySelector('#filter');

const listItem = [];

filter.addEventListener('input', (e) => filterData(e.target.value));

getData();

async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50');
  const { results } = await res.json();

  result.innerHTML = '';

  results.forEach((user) => {
    const li = document.createElement('li');

    listItem.push(li);

    li.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}"
    <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city} , ${user.location.country}</p>
    </div>
    `;

    result.appendChild(li);
  });
}

function filterData(searchTerm) {
  console.log(listItem);
  listItem.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}
