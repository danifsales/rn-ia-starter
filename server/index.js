import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import OpenAI from 'openai'

const app = express()
app.use(cors())
app.use(express.json())

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

app.post('/api/ai', async (req, res) => {
  try {
    const { prompt } = req.body
    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Campo "prompt" obrigatório.' })
    }

    const response = await client.responses.create({
      model: 'gpt-4o-mini',
      input: prompt,
      temperature: 0.7,
    })

    res.json({ text: response.output_text })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erro ao gerar resposta.' })
  }
})

const PORT = process.env.PORT || 3030
app.listen(PORT, '0.0.0.0', () => console.log(`✅ Server ON na porta ${PORT}`))
