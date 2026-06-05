console.log("file is running");
fetch("http://4.224.186.213/evaluation-service/register",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        email:"pr5621741@gmail.com",
        name:"bhargavi",
        mobileNo:"9063289119",
        githubUsername:"bhargavi",
        rollNo:"23bq1a0565",
        accessCode:"QQdEYy"
    })
})
.then(res=>{
    console.log("Status:",res.status);
    return res.json();
})
.then(data=>{
    console.log("Response recieved");
    console.log(data);
})
.catch(err=>{
    console.error("Error occured",err);
});