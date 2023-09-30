const feedbackForm = document.getElementById("feedbackForm");
const feedbackTextarea = document.getElementById("feedbackTextarea");

feedbackForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const feedbackText = feedbackTextarea.value.trim();
  
  if (feedbackText) {
    // User entered feedback
    const postData = {
      feedback: feedbackText
    };

    // Send data to Firebase Realtime Database
    fetch("https://loginandsingup-b3870-default-rtdb.firebaseio.com/feedbacks.json", {
      method: "POST",
      body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => {
      // Handle the server response if needed
      console.log(data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  }

  // Reset the form after submission
  feedbackForm.reset();
});
