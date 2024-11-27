let userdata = []

const saveData = ()=>{
    let alldata = JSON.parse(localStorage.getItem("userdata"))
    let len = alldata!=null ? alldata.length+1 : 1
    let name = document.getElementById("name").value
    // let age = document.frm.age.value
    let age = $("#age").val()
    let gender = $("input[type='radio']:checked").val()
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
    disp()
}
const disp = ()=>{
    //first localstorage mese data ko get karna he
    let alldata = JSON.parse(localStorage.getItem('userdata'))
    //JSON parse means original format me convert kiya
    let txt = ''
    //all data display in table format 
    alldata.map((i)=>{
        txt += `
                <tr>
                    <td>${i.id}</td>
                    <td>${i.name}</td>
                    <td>${i.age}</td>
                    <td>${i.gender}</td>
                    <td>
                        <button onclick="delData(${i.id})">Delete</button>
                    </td>
                </tr>`
    })
    $("#alldata").html(txt)

}
const delData = (id)=>{
    let alldata = JSON.parse(localStorage.getItem('userdata'))
    //5  -- 1   3 4 5
    //id = 2
    let res = alldata.filter((i)=>{
            return i.id != id
    })
    let j=1
    let finaldata = res.map((i)=>{
            i.id = j++
            return i
    })
    localStorage.setItem("userdata",JSON.stringify(finaldata))
    disp()
}
disp()




