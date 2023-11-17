// server.js
const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/submit-form', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Send data to Discord using a webhook
    const discordWebhook = process.env.DISCORD_WEBHOOK_URL;
    await axios.post(discordWebhook, {
      content: `New form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    // You can add additional logic here if needed

    res.status(200).send('Form submission successful');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
