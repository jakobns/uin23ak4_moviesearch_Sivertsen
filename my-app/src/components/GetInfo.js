default export async function getUsers() {

    let response = await fetch('http://img.omdbapi.com/?apikey=a2a5d73d]&');
    let data = await response.json()
    return data;
}
getUsers().then(data => console.log(data));