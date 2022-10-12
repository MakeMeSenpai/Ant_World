const baseUrl = "https://api.medium.com/v1"
let endPoint = "\\me" // seea  list of endpoints here https://github.com/Medium/medium-api-docs 
const search = "?"
const accessToken = "Keys in Code?"

function getRequest(){
    $.ajax({
        url: `${baseUrl}${endPoint}${search}accessToken=${accessToken}`,
        success: (res) => {
            console.log(res)
        }
    });
}

getRequest()