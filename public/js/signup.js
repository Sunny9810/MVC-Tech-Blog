const lemonSignupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#lemon-username').value.trim();
    const email = document.querySelector('#lemon-email').value.trim();
    const password = document.querySelector('#lemon-password').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/'); // When successful, load the homepage
      } else {
        alert('Failed to sign up with your lemon-themed account.'); // When unsuccessful, show alert
      }
    }
  };
  
  // Event listener
  const lemonSignupForm = document.querySelector('#lemon-signup-form');
  if (lemonSignupForm) {
    lemonSignupForm.addEventListener('submit', lemonSignupFormHandler);
  }
  