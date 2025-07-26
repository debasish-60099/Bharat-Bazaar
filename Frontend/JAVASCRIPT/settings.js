// Handle Tab Switching
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    tabButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');

    // Show relevant tab content
    const targetTab = button.getAttribute('data-tab');
    tabContents.forEach(content => {
      content.classList.remove('active');
      if (content.id === targetTab) {
        content.classList.add('active');
      }
    });
  });
});

// Profile Picture Preview
const profileUpload = document.getElementById('profileUpload');
const profilePreview = document.getElementById('profilePreview');

if (profileUpload) {
  profileUpload.addEventListener('change', () => {
    const file = profileUpload.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => profilePreview.src = e.target.result;
      reader.readAsDataURL(file);
    }
  });
}

// Delete Account Modal Logic
const deleteAccountBtn = document.getElementById('deleteAccountBtn');
const deleteModal = document.getElementById('deleteModal');
const cancelDelete = document.getElementById('cancelDelete');
const confirmDelete = document.getElementById('confirmDelete');

if (deleteAccountBtn) {
  deleteAccountBtn.addEventListener('click', () => {
    deleteModal.style.display = 'flex';
  });
}

if (cancelDelete) {
  cancelDelete.addEventListener('click', () => {
    deleteModal.style.display = 'none';
  });
}

if (confirmDelete) {
  confirmDelete.addEventListener('click', () => {
    alert("Your account has been deleted (simulate backend API call).");
    deleteModal.style.display = 'none';
    // Add actual API call or redirect logic here
  });
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === deleteModal) {
    deleteModal.style.display = 'none';
  }
});
