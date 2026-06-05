console.log("script started");
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwcjU2MjE3NDFAZ21haWwuY29tIiwiZXhwIjoxNzgwNjQyMzEyLCJpYXQiOjE3ODA2NDE0MTIsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJiM2E5NTBlOC1jZWQyLTRhYTktODhjYy1mZDg4ZjIwODAwMGQiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJiaGFyZ2F2aSIsInN1YiI6IjY2M2UzZDQyLTdkNzgtNGMxYS04NzRkLWI4MjI0MzA5N2NiOCJ9LCJlbWFpbCI6InByNTYyMTc0MUBnbWFpbC5jb20iLCJuYW1lIjoiYmhhcmdhdmkiLCJyb2xsTm8iOiIyM2JxMWEwNTY1IiwiYWNjZXNzQ29kZSI6IlFRZEVZeSIsImNsaWVudElEIjoiNjYzZTNkNDItN2Q3OC00YzFhLTg3NGQtYjgyMjQzMDk3Y2I4IiwiY2xpZW50U2VjcmV0IjoiYVFEaGNObmZaV3NqS3JteCJ9.RofGVZVhdv6ay9UJVj7IJmyLeOe48fsnfEefgg7N_tc";
console.log("logging middleware started");
fetch("http://4.224.186.213/evaluation-service/logs",{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+token
    },
    body:JSON.stringify({
        stack:"frontend",
        level:"error",
        package:"api",
        message:"received string,expected bool"
    })
})
.then(res=>res.json())
.then(data=>{
    console.log("Response:");
    console.log(data);
})
.catch(err=>{
    console.log("Error:",err);
});