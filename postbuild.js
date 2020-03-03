const fs = require('fs');

const assetRegexp = /\/(assets\/(css|js)\/main\.[0-9a-z]+\.(css|js))/g;

const assetRegexp1 = /\/(index+\.(html))/g;


const folder = 'build';
if (folder) {
    const indexFileName = `${folder}/index.html`;

    fs.writeFileSync(indexFileName, fs.readFileSync(indexFileName, 'utf8').replace(assetRegexp, '$1'));
	
	const indexFileName1 = `${folder}/service-worker.js`;
	
    fs.writeFileSync(indexFileName1, fs.readFileSync(indexFileName1, 'utf8').replace(assetRegexp, '$1'));
    
    fs.writeFileSync(indexFileName1, fs.readFileSync(indexFileName1, 'utf8').replace(assetRegexp1, '$1'));

	} else {
    console.log(`Could not find build folder`);
}

	

