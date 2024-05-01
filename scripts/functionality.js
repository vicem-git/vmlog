// FUNCTIONS

//  toggle dropdown

function toggleDropdown() {
   var dropdown = this.nextElementSibling;
   if (dropdown.style.display === 'none') {
       dropdown.style.display = 'block';
   } else {
       dropdown.style.display = 'none';
   }
}


document.addEventListener('DOMContentLoaded', function() {
   document.querySelector('.port-butt').addEventListener('click', toggleDropdown);
   document.querySelector('.port-butt').addEventListener('touchstart', toggleDropdown);
});

   




