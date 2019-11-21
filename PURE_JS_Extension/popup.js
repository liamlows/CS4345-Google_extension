$(function() {
    $('#btn').click(async function() {
        //create URL
        let val = $('#show-name').val();
        var url = `ec2-3-17-5-181.us-east-2.compute.amazonaws.com=${val}`;
         
        //Call api endpoint
        await fetch(url, { method:'GET', mode:'cors', credentials:'same-origin' })
            .then(r => { return r.json() })
            .then(r => {
                console.log(r);
                //Store list of words
                chrome.storage.sync.set({ wordList: r }, () => {});
                alert('Word list loaded, you may now browse safely!');
            })
            .catch(r => {
                console.log(r);
                alert('Error while processing your request, try again or change your input query.');
            });
    });

    $('#dlt').click(function() {
        chrome.storage.sync.remove('wordList');
        console.log('click');
        alert('Spoiler list clear, browse carefully!');
    });
});