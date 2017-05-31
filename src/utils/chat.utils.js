const authors = ['Garfield', 'Tintin', 'Batman', 'Catwoman', 'Joe Bar Team']

export const generateRandomEntry = (malicious) => ({
  author: authors[Math.floor(Math.random() * 4)],
  text: malicious ? `<a onmouseover="alert('GIVE ME ALL THE COOKIES :O '+ document.cookie)">My text highligh when you hover it ! &#9937;</a>` : '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nulla velit, sagittis non malesuada a, vehicula ac libero.</p>'
  // text: malicious ? `<img src="https://www.w3schools.com/css/paris.jpg" onload=alert(document.cookie);>` : '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nulla velit, sagittis non malesuada a, vehicula ac libero.</p>'
})

export const generateRandomEntries = (nb) => {
  const entries = []
  for (let i = 0; i < nb; i++) {
    entries.push(generateRandomEntry())
  }
  return entries
}
