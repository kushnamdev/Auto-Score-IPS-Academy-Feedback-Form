// content.js
(function () {
    'use strict';

    // Wait for the page to fully load
    window.addEventListener('load', function () {
        // Locate all dropdowns for feedback status (update this selector to the correct one)
        var resolveDropdowns = document.querySelectorAll('.form-control');

        resolveDropdowns.forEach(function (dropdown) {
            if (dropdown && dropdown.value !== '3') {
                // Change the dropdown value to "3"
                dropdown.value = '3';  // Use the actual value that corresponds to "your score" in the dropdown

                // Create and dispatch a "change" event to ensure the dropdown change is registered
                var changeEvent = new Event('change', { bubbles: true });
                dropdown.dispatchEvent(changeEvent);
            }
        });
    }, false);
})();
