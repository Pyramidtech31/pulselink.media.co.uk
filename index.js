const suggestionsContainer = document.getElementById('suggestionsContainer');
const searchInput = document.getElementById('searchInput');

// Suggested search terms
const suggestedTerms = ['Home', 'Websites', 'Feedback', 'Contact us',];

// Function to update the suggestions based on user input
function updateSuggestions() {
    const searchTerm = searchInput.value.toLowerCase();

    // Clear previous suggestions
    suggestionsContainer.innerHTML = '';

    // Display suggestions that start with the user's input
    const filteredSuggestions = suggestedTerms.filter(term => term.startsWith(searchTerm));
    filteredSuggestions.forEach(suggestion => {
        const suggestionElement = document.createElement('div');
        suggestionElement.textContent = suggestion;
        suggestionElement.classList.add('suggestion');
        suggestionElement.addEventListener('click', () => {
            // Set the clicked suggestion as the search input
            searchInput.value = suggestion;
            // Clear suggestions
            suggestionsContainer.innerHTML = '';
            // Perform the search and navigate
            searchAndNavigate();
        });
        suggestionsContainer.appendChild(suggestionElement);
    });
}

// Event listener for input changes
searchInput.addEventListener('input', updateSuggestions);

function searchAndNavigate() {
    const searchTerm = searchInput.value.toLowerCase();
    const pageMap = {
        'home': 'index.html',
        'feedback': 'feedback.html',
        'contact us': 'contactus.html',
        'websites': 'products.html',
        'prices': 'price.html',
        
        // Add more mappings as needed
    };

    if (pageMap.hasOwnProperty(searchTerm)) {
        window.location.href = pageMap[searchTerm];
    } else {
        alert('No match found for the search term: ' + searchTerm);
    }
}

