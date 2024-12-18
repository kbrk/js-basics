// Promise is an object to handle asynchronous processes that take some time like API calls, file loading etc. It contains pending, resolved and rejected stages. The pending stage is the stage where the process is running. The resolved means that the process was completed successfully, and the result was returned. The rejected means, the process, somehow, provide an error. 

function getFile() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('.pdf');
        }, 1000);
    });
}


function getFileType(file) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            switch (file) {
                case '.pdf':
                    resolve('PDF');
                    break;
                case '.doc':
                    resolve('DOC');
                    break;
                case '.png':
                case '.jpg':
                    resolve('IMG');
                    break;
                default:
                    reject('Unknown file type.');
                    break;
            }
        }, 1000)
    });
}

function onResolve(data) {
    console.log(`Resolved as ${data} file.`);
}

function onReject(error) {
    console.log(`Error: ${error}`);
}

function end() {
    console.log('the process is done.');
}

getFile()
    .then(getFileType)
    .then(onResolve)
    .catch(onReject)
    .finally(end);