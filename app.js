//hi! my name is... who? my name is... what? my name is- erew erew slim shady
//**Note To Self** -Think of this problem like building a coin counting&sorting machine. The user of the machine(the text analyzer) will put in coins(strings) and as a result the machine takes the coins, organizes them, and returns A: the total amout of coins(WordCount) B:How Many Unique Coins there were(uniqueWordCount) C: Average value of the coins(in our case average length of word)

//***regular expression to strip punctuation*** .split(/[ ,!.";:-]+/)
//What we need to build - JavaScript code that computes and displays 3 metrics:
//Total word count of the submitted text
//Unique word count of the submitted text
//Average word length in characters of the submitted text
//The program should print each of these metrics in the appropriate area in the results section.
//***ADD CLASSES TO HTML TO HOOK JS***
//STEP-1 Function and Object definitions
//function getTokens will take our user-text and strip punctuation to create strings
function getTokens() {
    //alert('getTokensActive')
    var userInput = $('#user-text')[0].value.split(/[ ,!.";:-?]+/);
    return userInput
}
// function getTotal will give us the length of our array of strings
function getTotal(text) {
    return text.length;

}

//function getUnique will give us the total # of unique strings
//unique strings does
function getUnique(text) {
    $.uniqueSort(text);
    return text.length;

}
//function getAverage will give us the average character length of  strings
function getAverage(text) {
    var totalAmountOfWords = text.length;
    var allTheWordsToghether = '';
    for (var counter = 0; counter < text.length; counter++) {
        allTheWordsToghether += text[counter];
    }
    var textLengthArray = allTheWordsToghether.split("");
    var totalAmountOfCharacters = textLengthArray.length;

    return (totalAmountOfCharacters / totalAmountOfWords);
}

$('#js-token').on('submit', function (event) {
    if (event.type === 'submit') {
        event.preventDefault();

        $('dl').removeClass("hidden");

        var text = getTokens();

        $('.js-total').html(getTotal(text));
        $('.js-unique').html(getUnique(text));
        $('.js-average').html(getAverage(text));
    }
});
