chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        switch (message.type) {
            case "login":
                console.log(`Dados retornandos do content.js.`, message);
                break;

            case "signup":
                console.log("signup");
                break;

            default:
                console.log("Sem ação no case.")


        }
    })





// $(document).ready(() =>{
//     $.ajax({
//         url:"http://localhost:8088/api/users",
//         type:"GET",
//         success:(response)=>{
//             console.log(`API retornou`);
//             console.log(response)
//         },
//         error:(response) =>{
//             console.log(`Ocorreu o um erro :${response.message}`);

//         }
//     })

// });