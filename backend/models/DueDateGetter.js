const { parse } = require('node-html-parser');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
 
function getData(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var result = this.responseText;
            valueCallBack(result);
        }
    };
    xhr.send();
}

function valueCallBack(value){
    const root = parse(value);
    const table = root.getElementById("assessment-table");
    const dates = [];

    for (let i = 0; i < table.childNodes.length; i++) {
        AssessmentName = root.querySelector("#assessment-table > tbody:nth-child("+i.toString()+") > tr.primary > td:nth-child(2) > b");
        DueDate = root.querySelector("#assessment-table > tbody:nth-child("+i.toString()+") > tr.primary > td:nth-child(4)")
        if (AssessmentName != null) {
            var newDueDate = DueDate.text.toString().replace(/\s+/g, ' ').trim();
            dates.push([AssessmentName.innerHTML,newDueDate]);
        }
    }

    for (let i = 0; i < dates.length; i++) {
        console.log(dates[i]);
    }
}

getData("https://www.sydney.edu.au/units/INFO1110/2023-S1C-ND-CC");
