document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('signInForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submit action
    
      // Get the username and password values
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
    
      if (username && password) {
        // Save username and password to localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    
        // Redirect to index.html
        window.location.href = "../HTML/index.html";
      } else {
        alert('Please fill in both username and password.');
      }
  });
});

