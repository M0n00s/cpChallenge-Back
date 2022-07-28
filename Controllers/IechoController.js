module.exports = {

  invertText: function (text) {
    const iText = { text: text.split('').reverse().join('') }
    text === iText.text && (iText.palindrome = true)

    return iText
  }

}
