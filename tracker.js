// tracker.js

document.addEventListener("DOMContentLoaded", () => {
  const usageForm = document.getElementById("usageForm");
  const usageList = document.getElementById("usageList");
  const totalUsage = document.getElementById("totalUsage");

  let total = 0;

  usageForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const litresInput = document.getElementById("litresUsed");
    const activityInput = document.getElementById("activity");

    const litres = parseFloat(litresInput.value);
    const activity = activityInput.value.trim();

    if (!isNaN(litres) && activity) {
      // Update total usage
      total += litres;
      totalUsage.textContent = total.toFixed(2);

      // Create list item
      const li = document.createElement("li");
      li.textContent = `${litres} litres - ${activity}`;
      usageList.prepend(li);

      // Clear form
      litresInput.value = "";
      activityInput.value = "";
    }
  });
});
