let form = document.getElementById("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let gmail = document.getElementById("gmail").value;
    let pas = document.getElementById("password");
    let phn = document.getElementById("phone");
    console.log(gmail);
    let check = "gmail.com"
    if(!(gmail.includes("@gmail.com"))){
        let gr = document.getElementById('gmail_err');
        gr.innerText = "gmail should inclued @gmail.com";
    }else{
        let gr = document.getElementById('gmail_err');
        gr.innerText = "";
        if(pas.value.length<=8){
            let pe = document.getElementById("pass_err");
            pe.innerText = "Password should be mim of length 8";
        }else{
            let pe = document.getElementById("pass_err");
            pe.innerText = "";
            if(phn.value.length!=10 ){
                let phn_err = document.getElementById("num_err");
                phn_err.innerText = "Please enter Indian Standard number";
            }else{
                let phn_err = document.getElementById("num_err");
                phn_err.innerText = "";
                window.open('home.html');
            }
        }
    }
});