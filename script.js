const userDataDiv = document.getElementById("user-data");

fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => {
    const user = data.results[0];
    userDataDiv.innerHTML = `
    <img src="${user.picture.large}"
    <div>
    <h1>Name : ${user.name.first} ${user.name.last}</h1>
    <p>Email: ${user.email}</p>
    <p>Mobile: ${user.phone}</p>
    <p>Age: ${user.dob.age}</p>
    <p>Country: ${user.location.country}</p>
    <p>State: ${user.location.state}</p>
    <p>City: ${user.location.city}</p>
    </div>
    `;
  });
