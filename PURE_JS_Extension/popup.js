$(function() {
    $('#btn').click(async function() {
        //create URL
        let val = $('#show-name').val();
        var url = `http://ec2-18-191-182-243.us-east-2.compute.amazonaws.com/show=${val}`;
         
        //Call api endpoint
        await fetch(url, { method:'GET', mode:'cors', credentials:'same-origin' })
            .then(r => { return r.json() })
            .then(r => {
                console.log(r);
                chrome.storage.sync.set({ wordList: r }, () => {});
            })
            .catch(r => {
                alert(r);
            });
        
        //GET LIST OF DATA
        //PUT IT IN LOCALSTORAGE

    });
});