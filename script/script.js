$(document).ready(function() {
    var storyStep = 0;
    var storyText = document.getElementById("storyText");

    $('#dogeMemePic').click(function() {
        if (storyStep === 0) {
            // Story Step 1
            storyText.textContent = "You clicked the image and started the adventure!";
            storyStep++;
        } else if (storyStep === 1) {
            // Story Step 2
            $('#dogeMemePic').attr('src', 'https://media.istockphoto.com/id/1197953909/photo/golden-cute-puppy-playing-with-pillow-on-couch.jpg?s=1024x1024&w=is&k=20&c=3P09HrpmINLzxNKExEgWvVvjJS2fpxjN_GkPdoJ_n6M=');
            storyText.textContent = "As you clicked, the image changed. Keep going!";
            storyStep++;
        } else if (storyStep === 2) {
            // Story Step 3
          $('#dogeMemePic').attr('src', 'https://www.helpguide.org/wp-content/uploads/2023/02/Health-Benefits-of-Walks-with-Your-Dog-1200x800.jpeg');
            storyText.textContent = "You've reached the end of the interactive story! Thanks for joining the adventure!";
            storyStep = 0; // Reset the story for replay
        }
    });
});