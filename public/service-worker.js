// chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//     console.log('chrome tab seen')
//     chrome.tabs.sendMessage(tabs[0].id, { action: 'extractHTML' }, function(response) {
//       if (response && response.html) {
//         console.log('html resp', response.html);
//         // Do something with the extracted HTML, like displaying it in a textarea
//         // Example: document.getElementById('htmlOutput').value = response.html;
//       }
//     });
//   });