// Get the URL from the anchor tag
const link = document.getElementById('link').getAttribute('href');

// Create a QR code instance
const qrCodeContainer = document.querySelector('.qrcontainer');
const qrCode = new QRCode(qrCodeContainer, {
  text: link,
  width: 128,
  height: 128,
});

// Display the QR code in the specified container
qrCode.makeCode(link);
