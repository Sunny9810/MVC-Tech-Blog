const newLemonPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title-new-lemon-post').value.trim();
    const content = document.querySelector('#content-new-lemon-post').value.trim();
  
    if (title && content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard'); // When successful, load the dashboard page
      } else {
        alert('Failed to create a new lemon-themed post.'); // When unsuccessful, show alert
      }
    }
  };
  
  // Event listeners
  const newLemonPostForm = document.querySelector('.new-lemon-post-form');
  if (newLemonPostForm) {
    newLemonPostForm.addEventListener('submit', newLemonPostFormHandler);
  }
  