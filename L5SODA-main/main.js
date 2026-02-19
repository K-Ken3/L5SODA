// Function to open the application modal
function openModal(roleName) {
    const modal = document.getElementById('applyModal');
    const modalRole = document.getElementById('modalRole');
    
    modalRole.innerText = roleName;
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById('applyModal').style.display = "none";
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('applyModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle Form Submission
document.getElementById('applyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Application sent successfully! Murakoze cyane.");
    closeModal();
});