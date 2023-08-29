// script.js
const memoryForm = document.getElementById('memory-form');
const memoryContainer = document.querySelector('.memory-container');

memoryForm.addEventListener('submit', async event => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const memory = document.getElementById('memory').value;

    if (!name || !memory) {
        return;
    }

    const response = await fetch('/api/submitMemory', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, memory }),
    });

    if (response.ok) {
        // Refresh the memory container to show the updated memories
        memoryContainer.innerHTML = ''; // Clear existing memories
        fetchMemories(); // Fetch and display memories again
    } else {
        console.error('Failed to submit memory');
    }
});

async function fetchMemories() {
    const response = await fetch('/api/memories.json'); // Assuming you have an API route to serve the JSON file
    const memories = await response.json();
    memories.forEach(memory => {
        const memoryItem = document.createElement('div');
        memoryItem.classList.add('memory-item');
        memoryItem.innerHTML = `
            <p><strong>${memory.name}</strong> said:</p>
            <p>${memory.memory}</p>
        `;
        memoryContainer.appendChild(memoryItem);
    });
}

// Initial fetch to populate the memories
fetchMemories();
