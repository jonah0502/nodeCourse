const fs = require('fs');
const { dirname } = require('path');
const path = require('path');

// //create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err=>{
//     if(err) throw err;
//     console.log('Folder Created...');
// });
//create and write to file (will overrite what is in the file already)
fs.writeFile(
    path.join(__dirname, '/test', 'hello.txt'),
    'Hello World!',
    err=>{
        if(err) throw err;
        console.log('File written to...');
    }
);

// append to file
fs.appendFile(
    path.join(__dirname, '/test', 'hello.txt'),
    'I lover node.js',
    err=>{
        if(err) throw err;
        console.log('File written to...');
    }
);
//read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data)=>{
//     if(err) throw err;
//     console.log(data);
// } );

//rename file
 fs.rename(path.join(__dirname, '/test', 'hello.txt'), 
 path.join(__dirname, '/test', 'helloworld.txt'), 
 (err)=>{
     if(err) throw err;
     console.log('File renamed');
 } );


 // delete a folder
// NOTE : you must create a folder named "myFolderToDelete".
// NOTE : myFolderToDelete must be an empty folder.
fs.rmdir(path.join(__dirname, "/myFolderToDelete"), (err) => {
    if (err) throw err;
  
    console.log("Folder deleted ...");
  });
  
  
  // Read the contents of a folder
  // NOTE: the first argument can be whatever route you want, it doesn't have to be the actual dirname.
  fs.readdir(__dirname, (err, files) => {
    if (err) throw err
    console.log(files)
  }) 
  
  // Copy a file 
  fs.copyFile('source.txt', 'destination.txt', err => {
    if (err) throw err;
    console.log('File copied...');
})