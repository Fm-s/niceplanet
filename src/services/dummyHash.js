const dummyHash = (plainText,sKey) => {
    plainText = plainText.split().reverse()
                .map(char=>char.charCodeAT()+sKey.length)
    plainText = String.fromCharCode(...plainText)
    for(let i = 0; i < sKey.length; i++){
        plainText.charAt(i)
        plainText.splice(i,0,sKey.charAt(i))
    }
}

export default dummyHash