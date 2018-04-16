// import express  from 'express';
// import React    from 'react';
// import ReactDom from 'react-dom/server';
// import App      from 'components/navbar/Navbar';
//
// const app = express();
//
// app.use((req, res) => {
// //    const componentHTML = ReactDom.renderToString();
//
//     return res.end(renderHTML());
// });
//
// const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '/';
//
// function renderHTML() {
//     return `
//     <!DOCTYPE html>
//       <html>
//       <head>
//           <meta charset="utf-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.0/css/bootstrap.min.css" />
//           <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
//  <link rel="icon" href="images/favicon.ico" type="image/x-icon">
//           <title>Hydrobot-X</title>
//
//           <link rel="stylesheet" href="${assetUrl}/build/assets/styles.css">
//       </head>
//       <body>
//     <div id="react-view"></div>
//         <script type="application/javascript" src="${assetUrl}/build/assets/bundle.js"></script>
//       </body>
//     </html>
//   `;
// }
//
// const PORT = process.env.PORT || 3001;
//
// app.listen(PORT, () => {
//     console.log(`Server listening on: ${PORT}`);
// });


const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(request, response) {
    response.sendFile(__dirname + '/public/tester.html');
});

const port = process.env.PORT || 8000;
app.listen(port, function(){
    console.log(`Server listening port ${port}`);
});