const fs = require('fs')
const folderName = process.argv[2] || 'Project'

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK!")
//     if (err) throw err;
// })

fs.mkdirSync(folderName);