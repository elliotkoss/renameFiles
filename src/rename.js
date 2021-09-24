const console = require("console");
const fs = require("fs");
const path = require("path");

const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const renameDir = `${basePath}/rename`;

const charToRemove = 18;

const renameFiles = () => {

  let files = fs
                .readdirSync(renameDir)
                .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
                .map((i) => {
                  return {
                    name: i,
                    path: `${renameDir}/`,
                    pathOriginalName: `${renameDir}/${i}`,
                  };
              });

  for (let i = 0; typeof files[i] != 'undefined' ; ++i ) {

    let filePath = files[i].path;
    let spliceName = files[i].name.slice(charToRemove);
    let newFile = filePath.concat(spliceName);
    let originalFile = files[i].pathOriginalName;

    fs.rename( originalFile, newFile, (error) => {
      if (error) {        
        console.log(error);
      }
      else {    
        console.log(`Original File: ${originalFile}\nNew Name: ${newFile}\n`);
      }
    });
    
  }
};

module.exports = { renameFiles };