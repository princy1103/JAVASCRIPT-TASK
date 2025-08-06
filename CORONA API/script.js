async function fetchCovidData() {
  const country = document.getElementById('countryInput').value.trim();
  const url = `https://disease.sh/v3/covid-19/countries/${country}`;

  try {
    const response = await fetch(url);
      if (response.status === 404) {
      document.getElementById('result').innerHTML = `<p class="errormsg">No data found for "${country}"</p>`;
      return;
    }


    const data = await response.json();

    document.getElementById('result').innerHTML = `
      <h2>${data.country}</h2>
      <table>
        <tr><th>Total Cases</th><td>${data.cases}</td></tr>
        <tr><th>Today's Cases</th><td>${data.todayCases}</td></tr>
        <tr><th>Deaths</th><td>${data.deaths}</td></tr>
        <tr><th>Recovered</th><td>${data.recovered}</td></tr>
        <tr><th>Active</th><td>${data.active}</td></tr>
        <tr><th>Critical</th><td>${data.critical}</td></tr>
      </table>
    `;
  } catch (error) {
    document.getElementById('result').innerHTML = `<p class="error">${error.message}</p>`;
  }
}
