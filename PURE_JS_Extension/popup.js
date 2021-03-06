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
        var url = `http://18.224.180.44/show=${val}`;
        //Call api endpoint
        // alert('Sending your request... please be patient!');
    
        await fetch(url, { method:'GET'})
            .then(r => {
                console.log(r);
                if(r.status == 501) {
                    throw "NOT IMPLEMENTED";
                }
                return r.json() 
            })
            .then(r => {
                console.log(r);
                //Store list of words
                var bool = true;
                chrome.storage.sync.get('wordList', (wList) => {
                    if (wList.wordList){
                        chrome.storage.sync.set({ wordList: wList.wordList.concat(r) }, () => { 
                            document.getElementById("load").classList.remove('loader');
                            alert('Word list loaded, you may now browse safely!');
                            $('#show-name').val("");
                            bool = false;
                        });
                    }
                });
                if (bool){
                    chrome.storage.sync.set({ wordList: r }, () => {
                        document.getElementById("load").classList.remove('loader');
                        alert('Word list loaded, you may now browse safely!');
                    });
                }
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