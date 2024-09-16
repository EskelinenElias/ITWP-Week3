

const address = "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff"

fetch(address)
  .then(response => response.json())
  .then(data => console.log(data));


