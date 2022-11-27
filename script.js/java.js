function details(sentence){
    Detail = {
    length : sentence.length,
    words : sentence.split(" ").length,
    vowels : sentence.match(/[aeuoi]/gi).length
    }
    return Detail
}

var setnece = "abdulrahman tarek"
console.log(details(setnece))

