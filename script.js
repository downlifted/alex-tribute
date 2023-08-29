const memoryForm = document.getElementById('memory-form');

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
        // Refresh the page to show the updated memories
        window.location.reload();
    } else {
        console.error('Failed to submit memory');
    }
});
