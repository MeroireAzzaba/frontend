// Confirm before deleting a center
document.addEventListener('DOMContentLoaded', function() {
  const deleteForms = document.querySelectorAll('.delete-form');
  
  deleteForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      if (!confirm('Are you sure you want to delete this center?')) {
        e.preventDefault();
      }
    });
  });
});