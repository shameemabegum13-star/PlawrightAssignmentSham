function LaunchBrowser(browser) {
    if (browser === "Chrome"){
        console.log("Launching Chrome Browser");  
    } else if (browser === "Firefox"){
        console.log("Launching Firefox Browser");
    }  else if (browser === "Safari"){
        console.log("Launching Safari Browser");
    } else {
        console.log("No Browser Launched");  
    }  
}

function runTest(testType){
    switch (testType) {
        case "Smoke":
        console.log("Running Smoke Test");
            break;
        case "Sanity":
        console.log("Running Sanity Test");
            break;
        case "Regression":
        console.log("Running Regression Test");
            break;
        default:
        console.log("Running Default smoke test");
            break;
    }
    
}

LaunchBrowser("Chrome")
runTest()