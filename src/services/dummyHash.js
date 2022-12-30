const dummyHash = (plainText,sKey) => {
    plainText = plainText.split("").reverse()
                .map(char => {
                    return char.charCodeAt(0) + sKey.length}
                    )
    plainText = String.fromCharCode(...plainText).split("")
    for(let i = 0; i < sKey.length; i++){
        plainText.splice((2*i),0,sKey.charAt(i-1))
    }
    return plainText.join("")
}

export default dummyHash