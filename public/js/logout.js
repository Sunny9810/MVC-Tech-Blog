// Logout function to send request to log out the user
const lemonLogout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/'); // When successful, load the homepage
    } else {
      alert('Failed to log out from your lemon-themed account.'); // When unsuccessful, show alert
    }
  };
  
  // Add an event listener to the logout button
  const lemonLogoutButton = document.querySelector('#lemon-logout');
  if (lemonLogoutButton) {
    lemonLogoutButton.addEventListener('click', lemonLogout);
  }
  