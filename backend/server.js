const express = require('express');
const app = express();
const PORT = 3000;

app.get('/hello', (req, res) => {
    res.set({ 'Access-Control-Allow-Origin': '*'})
    res.json({ message: "Hello from Express API!" });
});

app.listen(PORT, () => {
    console.log(`API server running on http://localhost:${PORT}`);
});