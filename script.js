
document.addEventListener('DOMContentLoaded', (event) => {
    function getCurrentDate() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date().toLocaleDateString(undefined, options);
    }
    const dateElements = document.querySelectorAll('.current-date');
    dateElements.forEach(element => {
        element.textContent = getCurrentDate();
    });
});


const apiEndPoint="https://coding-week-2024-api.onrender.com/api/data";
//selecting DOM
const getButton = document.querySelector("#Featured");
const getButton2 = document.querySelector("#Lifestyle");
const getButton3 = document.querySelector("#Food");
const getButton4 = document.querySelector("#Health");
const getButton5 = document.querySelector("#Historical");
const getButton6 = document.querySelector("#Culture");

function getData(){
    fetch(apiEndPoint)
    .then(response=>{
        response.json()
        .then((posts)=>console.log(posts))
    })
}
getButton.addEventListener("click", ()=>{
   getData();
});
getButton2.addEventListener("click",()=>{
   getData();
});
getButton3.addEventListener("click",()=>{
   getData();
});
getButton4.addEventListener("click",()=>{
   getData();
});
getButton5.addEventListener("click",()=>{
   getData();
});
getButton6.addEventListener("click",()=>{
   getData();
});
