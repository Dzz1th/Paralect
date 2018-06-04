
const SearchForm = document.forms.search;
SearchForm.onsubmit = function(event){
    event.preventDefault();
    Search();
}

const SearchButton = document.querySelector('.SearchButton');
SearchButton.onclick = function(event){ 
    event.preventDefault();
    Search();
}
function Search(){
    let value = SearchForm.input.value;
    setTimeout(()=>{
        SearchForm.input.value='';
    } , 100);
    if(value){
        window.location.href=`${"https://www.google.com/search?q="}${value.toString()}`
    }
}