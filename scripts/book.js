// const baseUrl = "https://api.medium.com/v1"
// let endPoint = "\\me" // seea  list of endpoints here https://github.com/Medium/medium-api-docs 
// const search = "?"
// const accessToken = "Keys in Code?"

// function getRequest(){
//     $.ajax({
//         url: `${baseUrl}${endPoint}${search}accessToken=${accessToken}`,
//         success: (res) => {
//             console.log(res)
//         }
//     });
// }
// Only works  with backend, otherwise key would be left in code
// getRequest()

// read more about XMLHttpRequest: https://betterprogramming.pub/everything-about-xmlhttprequest-in-javascript-8adacc98a209
// creates XMLHttpRequest, used for web-scrapping and reading documents
var xhr =  new XMLHttpRequest();

// Bypasses website security cores which Prohibit web-scrapping
var corsAnywhere= "https://fast-dawn-89938.herokuapp.com/"

// Get request for content in https://medium.com/@makemesenpai/feed, we prefix this with cors anywhere
xhr.open("GET", corsAnywhere + "https://medium.com/@makemesenpai/feed", true);

// Defines responseType as document aka as Text/Html in legacy
xhr.responseType = "document";

// onload collects information on successful response
xhr.onload = function() {
    if (xhr.readyState == 4 && xhr.status == 200){
        // grabs our blogs titles and links as response
        var titles = xhr.responseXML.querySelectorAll("item title");
        var links = xhr.responseXML.querySelectorAll("item link");
        // FINISH: We feed the info into our pages content sing DOM!!!
        const one = document.getElementById("pg1");
        const two = document.getElementById("pg2");
        const three = document.getElementById("pg3");
        const four = document.getElementById("pg4");
        const five = document.getElementById("pg5");
        const six = document.getElementById("pg6");
        const seven = document.getElementById("pg7");
        const eight = document.getElementById("pg8");
        one.setAttribute("title", titles[0].innerHTML.slice(9).slice(0, -3));
        two.setAttribute("title", titles[1].innerHTML.slice(9).slice(0, -3));
        three.setAttribute("title", titles[2].innerHTML.slice(9).slice(0, -3));
        four.setAttribute("title", titles[3].innerHTML.slice(9).slice(0, -3));
        five.setAttribute("title", titles[4].innerHTML.slice(9).slice(0, -3));
        six.setAttribute("title", titles[5].innerHTML.slice(9).slice(0, -3));
        seven.setAttribute("title", titles[6].innerHTML.slice(9).slice(0, -3));
        eight.setAttribute("title", titles[7].innerHTML.slice(9).slice(0, -3));
        one.firstChild.setAttribute("href", links[0].innerHTML);
        two.firstChild.setAttribute("href", links[1].innerHTML);
        three.firstChild.setAttribute("href", links[2].innerHTML);
        four.firstChild.setAttribute("href", links[3].innerHTML);
        five.firstChild.setAttribute("href", links[4].innerHTML);
        six.firstChild.setAttribute("href", links[5].innerHTML);
        seven.firstChild.setAttribute("href", links[6].innerHTML);
        eight.firstChild.setAttribute("href", links[7].innerHTML);
    }
};

// error logs on unsuccessful response
xhr.onerror = function() {
    console.error(xhr.status, xhr.statusText);
};

// creates cor headers to manipulate
xhr.setRequestHeader("Content-type", "application/json");

// tricks website into thinking the response is coming fom their personal domain
let data = {
    headers: {
        Accept: "application/json",
        Origin: "https://medium.com"
    }
}

// START: stringifies the data and sends the headers in our request.
xhr.send(JSON.stringify(data));