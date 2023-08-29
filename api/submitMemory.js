// api/submitMemory.js
const fs = require('fs');
const path = require('path');

export default async (req, res) => {
    if (req.method === 'POST') {
        const { name, memory } = req.body;
        if (!name || !memory) {
            return res.status(400).json({ error: 'Name and memory are required' });
        }

        const memoryData = {
            name,
            memory,
            timestamp: new Date().toISOString(),
        };

        const dataFilePath = path.join(process.cwd(), 'data', 'memories.json');

        try {
            const memories = fs.existsSync(dataFilePath) ? JSON.parse(fs.readFileSync(dataFilePath)) : [];
            memories.push(memoryData);
            fs.writeFileSync(dataFilePath, JSON.stringify(memories, null, 2));
            return res.status(200).json({ message: 'Memory submitted successfully' });
        } catch (error) {
            return res.status(500).json({ error: 'An error occurred while saving the memory' });
        }
    }

    return res.status(405).json({ error: 'Method not allowed' });
};
