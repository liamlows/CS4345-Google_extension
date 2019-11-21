$(function() {
    $('#btn').click(async function() {
        //create URL
        let val = $('#show-name').val();
        var reg = /[\w]/gi;
        val = val.match(reg);
        var url = `http://ec2-18-221-46-124.us-east-2.compute.amazonaws.com=${val}`;
        document.getElementById("load").classList.add('loader');
        //Call api endpoint
        await fetch(url, { method:'GET', mode:'cors', credentials:'same-origin' })
            .then(r => { return r.json() })
            .then(r => {
                console.log(r);
                //Store list of words
                chrome.storage.sync.set({ wordList: r }, () => {});
                document.getElementById("load").classList.remove('loader');

            })
            .catch(r => {
                alert(r);
            });
    });

});