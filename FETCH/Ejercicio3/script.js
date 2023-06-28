(useFetch = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        document.write("Keys: <br>")
        for (const [value] of Object.entries(data).sort((a, b) => a[0].localeCompare(b[0]))) {
          console.log(value);
          
          document.write(`- ${value} <br>`);
        }
      })
      .catch(err => {
        console.log(err);
      });
  })('https://api.github.com/users/1');