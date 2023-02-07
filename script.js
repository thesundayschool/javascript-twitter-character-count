document.querySelector('.tweet_input').addEventListener('keypress', function(){
    
    let characterCount = document.querySelector('.tweet_input').value.length

    let characterleft = 140 - characterCount

    console.log(characterleft)

    document.querySelector('.count').innerText = characterleft;

})