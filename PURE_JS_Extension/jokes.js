
window.onload = () => {
    async function joke() {
        await fetch('https://icanhazdadjoke.com/', { method:'GET', mode:'cors', credentials:'same-origin', headers: {Accept: 'application/json'} })
            .then(r => {      
                return r.json() })
            .then(r => {
                document.getElementById("joke").innerHTML=r.joke;
            })
            .catch(r => {
                document.getElementById("joke").innerHTML="Joke Connection Error";
            });
    }
    joke();
}
