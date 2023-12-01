const searchInput = document.getElementById("search");
const itemContainer = document.getElementById("item-container");
const items = itemContainer.getElementsByClassName("item");
const searchIcon = document.querySelector(".search");

function removeDiacritics(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function updateVisibility() {
    const searchText = removeDiacritics(searchInput.value).toLowerCase();

    for (const item of items) {
        const itemText = removeDiacritics(item.textContent).toLowerCase();

        if (itemText.includes(searchText)) {
            item.classList.remove("hidden");
            item.classList.add("visible");
        } else {
            item.classList.remove("visible");
            item.classList.add("hidden");
        }
    }
}

function resetVisibility() {
    for (const item of items) {
        item.classList.remove("hidden");
        item.classList.add("visible");
    }
}

searchInput.addEventListener("input", updateVisibility);

searchIcon.addEventListener("click", () => {
    // Add focus to the search input when clicking the search icon
    searchInput.focus();
});

// Add an event listener for the close (X) icon
const closeButton = document.querySelector(".cancel");
closeButton.addEventListener("click", () => {
    // Check if the search input has any text
    if (searchInput.value.trim() !== "") {
        // Clear the value of the search input
        searchInput.value = "";
        // Reset the visibility of items to the initial state
        resetVisibility();
    }
    // If the search input is empty, no action is needed to keep the code unchanged
});
