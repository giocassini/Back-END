
const express = require("express");
const cors = require("cors");
const path = require("path");
const cachorros = require("./data/dogs.json");

const app = express();
const PORT = 3000;

// Permitir requisições do frontend
app.use(cors());

// Disponibilizar as fotos pela URL /fotos
app.use(
    "/fotos",
    express.static(path.join(__dirname, "data", "fotos"))
);

// Função para sortear um item de um array
function sortear(array) {
    const i = Math.floor(Math.random() * array.length);
    return array[i];
}

// ROTA 1 - Cachorro aleatório
app.get("/api/cachorros/aleatorio", (req, res) => {
    const todasAsFotos = Object.values(cachorros).flat();

    if (todasAsFotos.length === 0) {
        return res.status(404).json({
            status: "error",
            message: "Nenhuma foto de cachorro encontrada."
        });
    }

    const item = sortear(todasAsFotos);

    res.json({
        status: "success",
        message: `http://localhost:${PORT}/fotos/${item}`
    });
});

// ROTA 2 - Cachorro por raça
app.get("/api/cachorros/:raca", (req, res) => {
    const raca = req.params.raca.toLowerCase();

    if (!cachorros[raca] || cachorros[raca].length === 0) {
        return res.status(404).json({
            status: "error",
            message: `Raça "${raca}" não encontrada.`
        });
    }

    const item = sortear(cachorros[raca]);

    res.json({
        status: "success",
        message: `http://localhost:${PORT}/fotos/${item}`
    });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log("📂 Coloque as fotos manualmente em: data/fotos/");
});
