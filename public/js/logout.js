// Logout request (public/js/logout.js)
const Logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/'); // When successful, load the homepage
    } else {
      alert('Failed to log out.'); // When unsuccessful, show alert
    }
  };
  
  const LogoutButton = document.querySelector('#logout');
  if (LogoutButton) {
    LogoutButton.addEventListener('click', Logout);
  }