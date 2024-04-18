
const search = () =>{
    const searchBox =document.querySelector("#search").value.toUpperCase()
    const product_item = document.querySelector(".gallery")
    const product_item_ = document.querySelectorAll(".product")
    const product_name =  product_item.getElementsByTagName("h2") 
    for(var i =0; i<product_name.length; i++){
        let match = product_item_[i].getElementsByTagName("h2")[0]
        if(match){
            let textValue = match.textContent || match.innerHTML;
            if(textValue.toUpperCase().indexOf(searchBox) > -1){
                product_item_[i].style.display =" "
            }else{
                product_item_[i].style.display ="none"

            }
        }
    }

}

// const search = document.querySelector("#search")
// search.addEventListener("onkeyup",search111())