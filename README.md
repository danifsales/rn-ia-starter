# 🧠 Aplicativo React Native com IA — Trabalho Final

## 📱 Descrição
Aplicativo desenvolvido em **React Native (Expo)** com integração a uma **API de Inteligência Artificial (OpenAI)**.  
O usuário digita uma pergunta ou frase, e o app responde com base na IA configurada no backend.

---

## 🚀 Tecnologias Utilizadas
### Front-end:
- React Native
- Expo
- React Native Paper
- Expo Router
- Expo Constants

### Back-end:
- Node.js
- Express
- dotenv
- OpenAI API

---

## 🧩 Estrutura do Projeto
```
rn-ia-starter/
│
├── app/                    # Front-end React Native
│   ├── (tabs)/index.tsx    # Tela principal
│   ├── assets/             # Ícones e imagens
│   └── ...
│
├── server/                 # Backend Node.js (API)
│   ├── index.js
│   ├── .env                # Chave da OpenAI
│   └── package.json
│
├── app.json                # Configuração do Expo (BASE_URL, ícones, etc.)
├── package.json            # Dependências do projeto
└── README.md               # Este arquivo 😄
```

---

## ⚙️ Configuração do Backend
1. Acesse a pasta do servidor:
   ```bash
   cd server
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie o arquivo `.env`:
   ```bash
   OPENAI_API_KEY=sua_chave_da_openai
   ```
4. Inicie o servidor:
   ```bash
   npm start
   ```
   > O servidor rodará por padrão em `http://localhost:3030`

---

## ⚙️ Configuração do App (Frontend)
1. Volte para a pasta principal:
   ```bash
   cd ..
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Edite o arquivo `app.json` e defina o endereço do backend:
   - Para **testes no navegador**:
     ```json
     "BASE_URL": "http://localhost:3030"
     ```
   - Para **testes no celular físico (Expo Go)**:
     ```json
     "BASE_URL": "http://SEU_IP_LOCAL:3030"
     ```
     (exemplo: `"BASE_URL": "http://192.168.100.52:3030"`)

4. Rode o app:
   ```bash
   npx expo start
   ```
   - `w` → abrir no navegador  
   - `a` → abrir no emulador Android  
   - **QR Code** → abrir no celular (Expo Go)

---

## 🧪 Como Usar
1. Digite uma pergunta no campo de texto.  
2. Toque em **“Perguntar”**.  
3. A resposta gerada pela IA será exibida logo abaixo.  

---

## 💡 Possíveis Extensões
- Adicionar histórico de conversas  
- Trocar modelos da OpenAI (ex: GPT-4-turbo)  
- Personalizar o tema (modo claro/escuro)  
- Adicionar categorias temáticas (ex: receitas, motivacional, estudos etc.)

---

## 👩‍💻 Autoria
**Nome:** Daniela Ferreira Sales  
**Disciplina:** React Native  
**Professor:** Vinicius Oliveira  
**Instituição:** UTFPR  
**Ano:** 2025  
