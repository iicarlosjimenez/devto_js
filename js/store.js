document.addEventListener('DOMContentLoaded', () => {
   document.getElementById('storeForm').addEventListener('submit', (event) => {
      event.preventDefault()
      console.log(event);
   })
})