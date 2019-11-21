$(function() {
    $('#btn').click(async function() {
        //create URL
        let val = $('#show-name').val();
        var reg = /[\w\s]+/gi;
        val = val.match(reg).join();
        console.log(val);

        document.getElementById("load").classList.add('loader');
        var url = `http://ec2-18-221-46-124.us-east-2.compute.amazonaws.com/show=${val}`;
        console.log(url);

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