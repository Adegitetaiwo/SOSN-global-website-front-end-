function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

   /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.innerText);

  /* Alert the copied text */
  alert("Text Copied to clipboard");
}