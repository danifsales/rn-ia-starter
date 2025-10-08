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
    const { prompt, mode } = req.body || {};
    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Envie JSON: { "prompt": "..." }' });
    }

    const systems = {
      receitas:
        'Você recebe ingredientes e retorna 2 receitas curtas e objetivas. Para cada receita: título, lista de ingredientes e modo de preparo em até 6 passos. Evite itens caros. PT-BR.',
      coach:
        'Você é um coach de estudos. Gere 1 bloco de 60min (Pomodoro 25/5) com objetivo, passos e 1 exercício prático. Tom motivador e direto. PT-BR.',
      motivacional:
        'Com base no sentimento do usuário, gere 3 mensagens de incentivo curtas e 1 micro-ação de 2 minutos. Tom empático, sem clichês. PT-BR.',
      elogios:
        'Gere 3 elogios originais e específicos usando as preferências fornecidas. Tom leve e bem-humorado. PT-BR.'
    };

    const instructions = systems[mode] || 'Responda em PT-BR, direto ao ponto.';

    const response = await client.responses.create({
      model: 'gpt-4o-mini',
      instructions,
      input: prompt,
      temperature: 0.7
    });

    res.json({ text: response.output_text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao gerar resposta.' });
  }
})

const PORT = process.env.PORT || 3030
app.listen(PORT, '0.0.0.0', () => console.log(`✅ Server ON na porta ${PORT}`))
