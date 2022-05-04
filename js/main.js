const shareButton = document.querySelector('.share-button');
const shareDialog = document.querySelector('.share-dialog');
const closeButton = document.querySelector('.close-button');
var filesArray = "https://res.cloudinary.com/sosnglobal/image/upload/v1651632188/sosnglobal%20website/21%20day%20bootcamp%202022/main_flyer_erv48d.jpg";

shareButton.addEventListener('click', event => {
  if (navigator.share && navigator.share({ files: filesArray })) {
    navigator.share({
      title: 'WebShare API Demo',
      url: 'https://sosnglobal.netlify.app',
      text: "It has pleased the Lord to permit us bring to you the first edition of SOSN-GLOBAL 21-Day Bootcamp.A program targeted at revisiting the Consecration Culture of the Saints of Old. Register on the website https://sosnglobal.netlify.app. Registration Closes on Monday,9th of May.",
      files: filesArray
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
  } else {
    shareDialog.classList.add('is-open');
  }
});

closeButton.addEventListener('click', event => {
  shareDialog.classList.remove('is-open');
});