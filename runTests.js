const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');


exec('yarn test', (error,stderr) => {

/*   if (error) {
    console.error(`exec error: ${error}`);
    return;
  } */
  // console.log(`stdout: ${stdout}`);
  // console.log(`stderr: ${stderr}`);
  const interval = setInterval(() => {
    if (fs.existsSync(path.resolve(__dirname, 'test-results.json'))) {
      clearInterval(interval)
      const testResults = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'test-results.json'), 'utf8'));
      const totalTests = testResults.numTotalTests
      const passedTests = testResults.numPassedTests
      const score = Number((passedTests * 100) / totalTests).toFixed(2) ;
      const message = ` Total tests: ${totalTests} \n Passed tests: ${passedTests} \n Score: ${score}`
      console.log(message)
      // store message in a text file
      fs.writeFileSync("score.txt", message)
    }
  })
})