

let tbody=document.getElementById("tbody")



//fetch function
fetch("https://localhost:3001/prot")
    .then(res => res.json())
    .then(json =>{
        json.map(data => {
        console.log(data)
        tbody.append(td_fun(data));
        })
    })

//create table data
function td_fun({Nr1, prt1, institucioni, nr2, pr2, lenda}) {
    let td=document.createElement('tr');
    td.innerHTML= `
        <td>${Nr1}</td>
        <td>${prt1}</td>
        <td>${institucioni}</td>
        <td>${nr2}</td>
        <td>${pr2}</td>
        <td>${lenda}</td>
    `;
    return td;
}
