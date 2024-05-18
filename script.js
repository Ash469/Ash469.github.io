// To give the current date
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


// Selecting DOM elements
const buttons = {
   Featured: document.querySelector("#Featured"),
   Science: document.querySelector("#Science"),
   Lifestyle: document.querySelector("#Lifestyle"),
   Food: document.querySelector("#Food"),
   Health: document.querySelector("#Health"),
   Historical: document.querySelector("#Historical"),
   Culture: document.querySelector("#Culture")
 };
 
 const contentIds = {
   Featured: 4,
   Science: 8,
   Lifestyle: 5,
   Food: 6,
   Health: 9,
   Historical: 2,
   Culture: 1
 };
 
 // Function to generate the table HTML for a given item
 const generateContent = (item) => {
   if (!item) {
     return '<p>Item not found</p>';
   }
   return `
     <content>
       <div class="top" style="display: flex; justify-content: space-between;">
         <div class="author" style="display: flex; justify-content: end;">
           <h1>${item.author}</h1>
         </div>
         <h3>${item.date}</h3>
       </div>
       <div class="headline" style="display: flex; justify-content: center;">
         <h3>${item.headline}</h3>
       </div>
       <p>${item.content}</p>
     </content>
   `;
 };
 
 // Function to fetch the data by ID
 const getDataById = async (id) => {
   const apiEndPoint = "https://coding-week-2024-api.onrender.com/api/data"; 
   const response = await fetch(apiEndPoint);
   const data = await response.json();
   return data.find(item => item.id === id);
 };

 
 const handleButtonClick = async (buttonKey) => {
   const contentElement = document.querySelector(`#${buttonKey}content`);
   
   // Toggle visibility
   if (contentElement.style.display === 'block') {
     contentElement.style.display = 'none';
   } else {
     const item = await getDataById(contentIds[buttonKey]);
     const tableHTML = generateContent(item);
     contentElement.innerHTML = tableHTML;
     contentElement.style.display = 'block';
   }
 };
 
 Object.keys(buttons).forEach(key => {
   buttons[key].addEventListener("click", () => {
     handleButtonClick(key);
   });
 });
 
 