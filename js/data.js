// Fetch the data from data.json file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const indicatorList = document.getElementById('indicator-list');

    // Loop through the data and create HTML elements dynamically
    data.forEach(item => {
      const li = document.createElement('li');
      li.classList.add(item.category.toLowerCase());

      const imgTitle = document.createElement('div');
      imgTitle.classList.add('img-title');

      const img = document.createElement('img');
      img.src = item.icon;
      imgTitle.appendChild(img);

      const pTitle = document.createElement('p');
      pTitle.textContent = item.category;
      imgTitle.appendChild(pTitle);

      const interest = document.createElement('div');
      interest.classList.add('interest');

      const pScore = document.createElement('p');
      pScore.classList.add('out-hundred-summary');
      pScore.textContent = item.score;
      interest.appendChild(pScore);

      const pSlash = document.createElement('p');
      pSlash.classList.add('hundred-summary');
      pSlash.textContent = '/100';
      interest.appendChild(pSlash);

      li.appendChild(imgTitle);
      li.appendChild(interest);
      indicatorList.appendChild(li);
    });
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });
