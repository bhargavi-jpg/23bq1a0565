console.log("Authenticatioin started");
fetch("http://4.224.186.213/evaluation-service/auth",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        email:"pr5621741@gmail.com",
        name:"bhargavi",
        rollNo:"23bq1a0565",
        accessCode:"QQdEYy",
        clientID:"663e3d42-7d78-4c1a-874d-b82243097cb8",
        clientSecret:"aQDhcNnfZWsjKrmx"
    })
})
.then(res=>res.json())
.then(data=>{
    console.log("Authentication Response:");
    console.log(data);
})
.catch(err=>{
    console.log("Error:",err);
});