import QRious from "qrious";

const inputField = document.getElementById('input_text')
const generateBtn = document.querySelector('.button__generate')
const rotateAnimation = document.querySelector('.fa-rotate')
const qrImageSrc = document.querySelector('.qr__image')
const downloadBtn = document.querySelector('.download__container')

generateBtn.addEventListener('click', () => {
    if(inputField.value == '') return
    rotateAnimation.classList.add('rotate-animation')
    generateQR(inputField.value)
})

function generateQR(url) {

  const qr = new QRious({
    value: url,
    size: 200,
    level: 'H'
  });
  
  const image = qr.toDataURL();
  
  qrImageSrc.src = image
  downloadBtn.innerHTML = `
         <a href="${image}" class="qr__button" download="QR.png">Download <i class="fa-solid fa-download"></i></a>
  `

 

    // const qr = new QRious({
    //     element: document.getElementById("app"),
    //     value: 's'
    //   });
    // qr.background = 'green';
    // qr.backgroundAlpha = 0.8;
    // qr.foreground = 'blue';
    // qr.foregroundAlpha = 0.8;
    // qr.level = 'H';
    // qr.padding = 25;
    // qr.size = 500;
    // qr.value = 'https://github.com/neocotic/qrious';
    rotateAnimation.classList.remove('rotate-animation')

}






// const qr = new QRious({
//     value: "https://www.sisense.com/"
//   });
  
//   const image = qr.toDataURL();
  
//   document.getElementById("").innerHTML = `
//   <h1>Create QR Code with QRious!</h1>
//   <div>
//     <p>
//       <img src="${image}" /><br />
//       <a href="${image}" download="qr.png">Download</a>
      
//     </p>
//   </div>
//   `;

generateQR('https://github.com/Bert0ne')
