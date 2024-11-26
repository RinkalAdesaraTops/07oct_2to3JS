let userdata = []

const saveData = ()=>{
    let alldata = JSON.parse(localStorage.getItem("userdata"))
    let len = alldata!=null ? alldata.length+1 : 1
    let name = document.getElementById("name").value
    // let age = document.frm.age.value
    let age = $("#age").val()
    let gender = $("#gender").val()
    let obj = {
        id:len,
        name:name,
        age:age,
        gender:gender
    }
    // console.log(obj);
    userdata.push(obj)
    localStorage.setItem("userdata",JSON.stringify(userdata))
    document.frm.reset()
    
}