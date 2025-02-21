const personagens = [
    {
        nome: "Steve Rogers",
        codinome: "Capitão América",
        armaPrincipal: "Escudo de Vibranium",
        armaSecundaria: "Força aprimorada",
        velocidade: 75,
        forca: 85,
        resistencia: 90,
        descricao: function () {
            return "Nome do personagem: " + this.nome + "\n"
                + "Codinome do personagem: " + this.codinome + "\n"
                + "Arma Principal: " + this.armaPrincipal + "\n"
                + "Arma Secundária: " + this.armaSecundaria + "\n"
                + "Velocidade: " + this.velocidade + "\n"
                + "Força: " + this.forca + "\n"
                + "Resistência: " + this.resistencia;
        }
    },
    {
        nome: "Tony Stark",
        codinome: "Homem de Ferro",
        armaPrincipal: "Armadura Mark LXXXV",
        armaSecundaria: "Raio Repulsor",
        velocidade: 80,
        forca: 80,
        resistencia: 85,
        descricao: function () {
            return "Nome do personagem: " + this.nome + "\n"
                + "Codinome do personagem: " + this.codinome + "\n"
                + "Arma Principal: " + this.armaPrincipal + "\n"
                + "Arma Secundária: " + this.armaSecundaria + "\n"
                + "Velocidade: " + this.velocidade + "\n"
                + "Força: " + this.forca + "\n"
                + "Resistência: " + this.resistencia;
        }
    },
    {
        nome: "Thor Odinson",
        codinome: "Thor",
        armaPrincipal: "Mjolnir",
        armaSecundaria: "Stormbreaker",
        velocidade: 70,
        forca: 100,
        resistencia: 100,
        descricao: function () {
            return "Nome do personagem: " + this.nome + "\n"
                + "Codinome do personagem: " + this.codinome + "\n"
                + "Arma Principal: " + this.armaPrincipal + "\n"
                + "Arma Secundária: " + this.armaSecundaria + "\n"
                + "Velocidade: " + this.velocidade + "\n"
                + "Força: " + this.forca + "\n"
                + "Resistência: " + this.resistencia;
        }
    },
    {
        nome: "Bruce Banner",
        codinome: "Hulk",
        armaPrincipal: "Força Bruta",
        armaSecundaria: "Regeneração acelerada",
        velocidade: 65,
        forca: 100,
        resistencia: 95,
        descricao: function () {
            return "Nome do personagem: " + this.nome + "\n"
                + "Codinome do personagem: " + this.codinome + "\n"
                + "Arma Principal: " + this.armaPrincipal + "\n"
                + "Arma Secundária: " + this.armaSecundaria + "\n"
                + "Velocidade: " + this.velocidade + "\n"
                + "Força: " + this.forca + "\n"
                + "Resistência: " + this.resistencia;
        }
    },
    {
        nome: "Natasha Romanoff",
        codinome: "Viúva Negra",
        armaPrincipal: "Pistolas Gêmeas",
        armaSecundaria: "Artes Marciais",
        velocidade: 90,
        forca: 60,
        resistencia: 70,
        descricao: function () {
            return "Nome do personagem: " + this.nome + "\n"
                + "Codinome do personagem: " + this.codinome + "\n"
                + "Arma Principal: " + this.armaPrincipal + "\n"
                + "Arma Secundária: " + this.armaSecundaria + "\n"
                + "Velocidade: " + this.velocidade + "\n"
                + "Força: " + this.forca + "\n"
                + "Resistência: " + this.resistencia;
        }
    },
    {
        nome: "Clint Barton",
        codinome: "Gavião Arqueiro",
        armaPrincipal: "Arco e Flechas",
        armaSecundaria: "",
        velocidade: 85,
        forca: 65,
        resistencia: 75,
        descricao: function () {
            return "Nome do personagem: " + this.nome + "\n"
                + "Codinome do personagem: " + this.codinome + "\n"
                + "Arma Principal: " + this.armaPrincipal + "\n"
                + "Arma Secundária: " + this.armaSecundaria + "\n"
                + "Velocidade: " + this.velocidade + "\n"
                + "Força: " + this.forca + "\n"
                + "Resistência: " + this.resistencia;
        }
    },
    {
        nome: "Thanos",
        codinome: "Titã Louco",
        armaPrincipal: "Manopla do Infinito",
        armaSecundaria: "Força Descomunal",
        velocidade: 60,
        forca: 100,
        resistencia: 100,
        descricao: function () {
            return "Nome do personagem: " + this.nome + "\n"
                + "Codinome do personagem: " + this.codinome + "\n"
                + "Arma Principal: " + this.armaPrincipal + "\n"
                + "Arma Secundária: " + this.armaSecundaria + "\n"
                + "Velocidade: " + this.velocidade + "\n"
                + "Força: " + this.forca + "\n"
                + "Resistência: " + this.resistencia;
        }
    }
];

function compararPersonagens() {
    for (let i = 0; i < personagens.length; i++) {
        for (let j = i + 1; j < personagens.length; j++) {
            let p1 = personagens[i];
            let p2 = personagens[j];
            let resultado = [];
            
            console.log(`\nComparação entre ${p1.codinome} e ${p2.codinome}:`);
            
            if (p1.velocidade > p2.velocidade) {
                resultado.push(`${p1.codinome} vence em velocidade`);
            } else if (p1.velocidade < p2.velocidade) {
                resultado.push(`${p2.codinome} vence em velocidade`);
            }
            
            if (p1.forca > p2.forca) {
                resultado.push(`${p1.codinome} vence em força`);
            } else if (p1.forca < p2.forca) {
                resultado.push(`${p2.codinome} vence em força`);
            }
            
            if (p1.resistencia > p2.resistencia) {
                resultado.push(`${p1.codinome} vence em resistência`);
            } else if (p1.resistencia < p2.resistencia) {
                resultado.push(`${p2.codinome} vence em resistência`);
            }
            
            resultado.forEach(res => console.log("  " + res));
            
            let vitoriasP1 = resultado.filter(res => res.includes(p1.codinome)).length;
            let vitoriasP2 = resultado.filter(res => res.includes(p2.codinome)).length;
            
            if (vitoriasP1 > vitoriasP2) {
                console.log(`\n${p1.codinome} é o vencedor da partida!`);
            } else if (vitoriasP2 > vitoriasP1) {
                console.log(`\n${p2.codinome} é o vencedor da partida!`);
            } else {
                console.log("\nA partida terminou em empate!");
            }
        }
    }
}

compararPersonagens();