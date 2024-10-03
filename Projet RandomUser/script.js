const endpoint = "https://randomuser.me/api/?results=50";

// fetch data
fetch(endpoint)
  .then(function(response) {
    console.log(response);

    if (response.status === 200) {
      response.json()
        .then((datas) => {
          console.log(datas);
          const users = datas.results;

          // Créer un tableau avec les classes Bootstrap
          const table = document.createElement('table');
          table.classList.add('table', 'table-striped', 'table-hover', 'table-bordered');

          const headerRow = document.createElement('tr');
          const headers = ['Username', 'First Name', 'Last Name', 'Gender', 'Photo', 'City', 'Country'];
          headers.forEach(headerText => {
            const header = document.createElement('th');
            header.textContent = headerText;
            headerRow.appendChild(header);
          });
          table.appendChild(headerRow);

          // Ajouter les données des utilisateurs
          users.forEach(user => {
            const row = document.createElement('tr');
            
            const usernameCell = document.createElement('td');
            usernameCell.textContent = user.login.username;
            row.appendChild(usernameCell);

            const firstNameCell = document.createElement('td');
            firstNameCell.textContent = user.name.first;
            row.appendChild(firstNameCell);

            const lastNameCell = document.createElement('td');
            lastNameCell.textContent = user.name.last;
            row.appendChild(lastNameCell);

            const genderCell = document.createElement('td');
            genderCell.textContent = user.gender;
            row.appendChild(genderCell);

            const photoCell = document.createElement('td');
            const img = document.createElement('img');
            img.src = user.picture.thumbnail; // miniature de la photo
            img.alt = `${user.name.first} ${user.name.last}`;
            img.classList.add('img-thumbnail');
            photoCell.appendChild(img);
            row.appendChild(photoCell);

            const cityCell = document.createElement('td');
            cityCell.textContent = user.location.city;
            row.appendChild(cityCell);

            const countryCell = document.createElement('td');
            countryCell.textContent = user.location.country;
            row.appendChild(countryCell);

            // Ajouter la ligne au tableau
            table.appendChild(row);
          });

          // Insérer le tableau dans le conteneur avec l'ID 'userTableContainer'
          document.getElementById('userTableContainer').appendChild(table);
        });
    }
  })
  .catch(function(error) {
    console.log(error);
  });
