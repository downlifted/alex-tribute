const nftContainer = document.querySelector('.nft-container');
const memoryContainer = document.querySelector('.memory-container');
const memoryForm = document.getElementById('memory-form');

// Example NFT data (you can replace this with actual data)
const nfts = [
    { image: 'nft1.jpg', description: 'NFT 1 description' },
    { image: 'nft2.jpg', description: 'NFT 2 description' },
    // Add more NFTs
];

// Display NFTs in the gallery
nfts.forEach(nft => {
    const nftItem = document.createElement('div');
    nftItem.classList.add('nft-item');
    nftItem.innerHTML = `
        <img src="${nft.image}" alt="NFT Image">
        <p>${nft.description}</p>
    `;
    nftContainer.appendChild(nftItem);
});

// Handle memory submission
memoryForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const memory = document.getElementById('memory').value;
    const memoryItem = document.createElement('div');
    memoryItem.classList.add('memory-item');
    memoryItem.innerHTML = `
        <p><strong>${name}</strong> said:</p>
        <p>${memory}</p>
    `;
    memoryContainer.appendChild(memoryItem);
    memoryForm.reset();
});
