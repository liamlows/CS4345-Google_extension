$(function() {
    $('#btn').click(async function() {
        //create URL
        let val = $('#show-name').val();
        console.log(val);
        if (!val) {
            return;
        }
        var reg = /[\w\s]+/gi;
        val = val.match(reg).join();
        document.getElementById("load").classList.add('loader');
        var url = `http://ec2-18-221-46-124.us-east-2.compute.amazonaws.com/show=${val}`;
        //Call api endpoint
        alert('Sending your request... please be patient!');
        await fetch(url, { method:'GET', mode:'cors', credentials:'same-origin' })
            .then(r => { return r.json() })
            .then(r => {
                console.log(r);
                //Store list of words
                chrome.storage.sync.set({ wordList: r }, () => {
                    document.getElementById("load").classList.remove('loader');
                    alert('Word list loaded, you may now browse safely!');
                });
            })
            .catch(r => {
                console.log(r);
                document.getElementById("load").classList.remove('loader');
                alert('Error while processing your request, try again or change your input query.');
            });
    });
    $('#dlt').click(function() {
        chrome.storage.sync.remove('wordList');
        console.log('click');
        alert('Spoiler list clear, browse carefully!');
    });

    $('#reblr').click(function() {
        chrome.tabs.reload();
    });
});