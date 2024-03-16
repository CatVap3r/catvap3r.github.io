function currentTime() {
  // Get the current date and time
  const now = new Date();

  // Format the time as HH:MM
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;

  // Find the text element with the ID "clock-time"
  const clockElement = document.getElementById("clock-time");

  // Insert the formatted time into the text element
  clockElement.textContent = timeString;

  // Find the weather tile element
  const weatherTile = document.getElementById("weathertile");

  // Define the time ranges and corresponding gradient colors
  const timeRanges = [
      { startTime: 5, endTime: 9, colors: ["#FFC087", "#FFA897", "#FF8C93", "#FF5F9D"] }, // 5am to 9am
      { startTime: 9, endTime: 15, colors: ["#87ceeb", "#FDFBD3"] }, // 9am to 3pm
      { startTime: 15, endTime: 22, colors: ["#FF5F9D", "#FF8C93", "#FFA897", "#FFC087"]}, // 15pm to 22pm
      { startTime: 22, endTime: 5, colors: ["#0c1445", "#4c408e", "#5c54a4", "#38285c"] } // 12am to 5am
      // Add more time ranges as needed
  ];

  // Iterate through the time ranges and check if the current time falls within any of them
  for (const range of timeRanges) {
      if (hours >= range.startTime && hours <= range.endTime) {
          // Define gradient direction
          const direction = "27deg";

          // Create the linear gradient value
          const gradientValue = `linear-gradient(${direction}, ${range.colors.join(", ")})`;

          // Apply the gradient as the background color
          weatherTile.style.background = gradientValue;

          // Exit the loop as we found the matching time range
          return;
      }
  }

  // If no matching time range is found, revert to a default color
  weatherTile.style.background = ""; // Reset background color
}

// Call the function initially to display the time
currentTime();

// Update the time every second
setInterval(currentTime, 1000);
