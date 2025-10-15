// Dados das casas em BH e região
// Array de casas em Guarapari
const casasGuarapari = [
    {
        id: 7,
        nome: "Casa de Praia Bacutia-Enseada",
        preco: 1600, // Preço por dia
        acomodacoes: {
            quartos: 2,
            camasCasal: 1,
            camasSolteiro: 2,
            colchoeNoChao: 4,
            banheiros: 2,
            capacidade: 8
        },
        imagens: [
            "images/casag1_1.png",
            "images/casag1_2.png",
            "images/casag1_3.png",
            "images/casag1_4.png",
            "images/casag1_5.png",
            "images/casag1_6.png",
            "images/casag1_7.png",
            "images/casag1_8.png"
        ],
        localizacao: {
            endereco: "Praia da Bacutia, Guarapari, ES",
            tempoViagem: "09h20min da Oitava",
            mapa: "https://www.google.com/maps/dir/Oitava+Igreja+Presbiteriana+de+Belo+Horizonte+-+Rua+Nestor+Soares+de+Melo+-+Palmares,+Belo+Horizonte+-+MG/Praia+da+Bacutia+-+Guarapari,+ES/@-20.4841692,-43.5516458,8z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0xa69a8a26f907b7:0x5294a0301f619653!2m2!1d-43.9292313!2d-19.8745162!1m5!1m1!1s0xb8f9191d636917:0x8d03b8f157bc608f!2m2!1d-40.5299612!2d-20.7330894!3e0?authuser=0&entry=ttu&g_ep=EgoyMDI1MTAxMi4wIKXMDSoASAFQAw%3D%3D"
        },
        link: "https://www.booking.com/hotel/br/casa-de-praia-bacutia-enseada-azul-guarapari-es-guarapari.pt-br.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaCCIAQGYATO4ARfIARXYAQPoAQH4AQGIAgGoAgG4At2YvscGwAIB0gIkOWYzMTk5ZDAtODBlYy00OGZjLTk1ZWEtNTI4ODU5Njg5YjVj2AIB4AIB&sid=22f3850fae1c2f3e965767e1ce810c7a&all_sr_blocks=1504999801_422249800_8_0_0&checkin=2026-12-30&checkout=2027-01-03&dest_id=-645797&dest_type=city&dist=0&group_adults=8&group_children=0&hapos=2&highlighted_blocks=1504999801_422249800_8_0_0&hpos=2&matching_block_id=1504999801_422249800_8_0_0&no_rooms=2&req_adults=8&req_children=0&room1=A%2CA%2CA%2CA&room2=A%2CA%2CA%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1504999801_422249800_8_0_0__160000&srepoch=1760529810&srpvid=0acd54c7358d0044&type=total&ucfs=1&#map_closed"
    },
    {
        id: 8,
        nome: "Casa Praia Guarapari",
        preco: 2340, // Preço por dia
        acomodacoes: {
            quartos: 3,
            camasCasal: 1,
            camasSolteiro: 4,
            colchoeNoChao: 2,
            banheiros: 3,
            capacidade: 8
        },
        imagens: [
            "images/casag2_1.png",
            "images/casag2_2.png",
            "images/casag2_3.png",
            "images/casag2_4.png",
            "images/casag2_5.png",
            "images/casag2_6.png",
            "images/casag2_7.png",
            "images/casag2_8.png",
            "images/casag2_9.png"
        ],
        localizacao: {
            endereco: "Praia dos namorados, Guarapari, ES",
            tempoViagem: "09h horas da Oitava",
            mapa: "https://maps.google.com/?q=Praia+do+Morro,+Guarapari,+ES"
        },
        link: "https://www.booking.com/hotel/br/casa-de-praia-guarapari5.pt-br.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaCCIAQGYATO4ARfIARXYAQPoAQH4AQGIAgGoAgG4At2YvscGwAIB0gIkOWYzMTk5ZDAtODBlYy00OGZjLTk1ZWEtNTI4ODU5Njg5YjVj2AIB4AIB&sid=22f3850fae1c2f3e965767e1ce810c7a&all_sr_blocks=1505139601_422268304_8_0_0&checkin=2026-12-30&checkout=2027-01-03&dest_id=-645797&dest_type=city&dist=0&group_adults=8&group_children=0&hapos=8&highlighted_blocks=1505139601_422268304_8_0_0&hpos=8&matching_block_id=1505139601_422268304_8_0_0&no_rooms=2&req_adults=8&req_children=0&room1=A%2CA%2CA%2CA&room2=A%2CA%2CA%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1505139601_422268304_8_0_0__234000&srepoch=1760537956&srpvid=6f6c64a418ad0377&type=total&ucfs=1&#map_closed"
    }
];

// Dados das casas em BH e região
const casasBH = [
    {
        id: 1,
        nome: "Recanto Vista do Sol",
        preco: 2400,
        acomodacoes: {
            quartos: 2,
            camasCasal: 1,
            camasSolteiro: 2,
            colchoeNoChao: 4,
            banheiros: 1,
            capacidade: 8
        },
        imagens: [
            "images/casa1_1.jpg",
            "images/casa1_2.jpg",
            "images/casa1_3.jpg"
        ],
        localizacao: {
            endereco: "Jaboticatubas, Minas Gerais",
            tempoViagem: "2 horas da Oitava",
            mapa: "https://maps.google.com/?q=Jaboticatubas,+MG"
        },
        link: "https://www.booking.com/hotel/br/recanto-vista-do-sol-piscina-aquecida-jaboticatubas1.pt-br.html?aid=1702941&label=city-tiradentes-RZctNMmbGEMgkxaPkVOs1AS434528142223%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-2431988250%3Alp9196984%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YdbYVqXDN8zpzadTFvPkU_w"
    },
    {
        id: 2,
        nome: "Sitio Gigante",
        preco: 1886, // Preço por dia
        acomodacoes: {
            quartos: 4,
            camasCasal: 4,
            camasSolteiro: 3,
            banheiros: 3,
            capacidade: 20
        },
        imagens: [
            "images/casa2_1.png",
            "images/casa2_2.png",
            "images/casa2_3.png",
            "images/casa2_4.png",
            "images/casa2_5.png",
            "images/casa2_6.png",
            "images/casa2_7.png",
            "images/casa2_8.png",
            "images/casa2_9.png"
            ],
        localizacao: {
            endereco: "São José de Almeida, Jaboticatubas",
            tempoViagem: "01h20min da Oitava",
            mapa: "https://www.google.com/maps/dir/Oitava+Igreja+Presbiteriana+de+Belo+Horizonte+-+Rua+Nestor+Soares+de+Melo+-+Palmares,+Belo+Horizonte+-+MG/R.+S%C3%A3o+Jos%C3%A9+de+Almeida+-+Almeida,+Jaboticatubas+-+MG,+35830-000/@-19.6543223,-44.2597734,10z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0xa69a8a26f907b7:0x5294a0301f619653!2m2!1d-43.9292313!2d-19.8745162!1m5!1m1!1s0xa674947d6c1b49:0x8ac9e93f3093639f!2m2!1d-43.8507867!2d-19.4339372!3e0?authuser=0&entry=ttu&g_ep=EgoyMDI1MTAxMi4wIKXMDSoASAFQAw%3D%3D"
        },
        link: "https://www.booking.com/hotel/br/sitio-recanto-dos-ipes-com-area-de-lazer-completa-e-piscina-aquecida.pt-br.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaCCIAQGYATO4ARfIARXYAQPoAQH4AQGIAgGoAgG4At2YvscGwAIB0gIkOWYzMTk5ZDAtODBlYy00OGZjLTk1ZWEtNTI4ODU5Njg5YjVj2AIB4AIB&sid=22f3850fae1c2f3e965767e1ce810c7a&all_sr_blocks=1222518101_394381238_8_0_0_477298&checkin=2026-12-31&checkout=2027-01-02&dist=0&group_adults=8&group_children=0&hapos=10&highlighted_blocks=1222518101_394381238_8_0_0_477298&hpos=10&matching_block_id=1222518101_394381238_8_0_0_477298&no_rooms=2&req_adults=8&req_children=0&room1=A%2CA%2CA%2CA&room2=A%2CA%2CA%2CA&sb_price_type=total&sr_order=distance_from_search&sr_pri_blocks=1222518101_394381238_8_0_0_477298_209580&srepoch=1760529718&srpvid=806254902e88057a&type=total&ucfs=1&"
    },
    // Adicione mais casas conforme necessário
    {
        id: 3,
        nome: "Casa Logoa Santa",
        preco: 2995, // Preço por dia
        acomodacoes: {
            quartos: 3,
            camasCasal: "?Disse que tem 5 camas",
            camasSolteiro: "?",
            banheiros: 3,
            capacidade: 8
        },
        imagens: ["images/casa3_1.png",
            "images/casa3_2.png",
            "images/casa3_3.png",
            "images/casa3_4.png",
            "images/casa3_5.png",
            "images/casa3_6.png",
            "images/casa3_7.png"
        ],
        localizacao: {
            endereco: "Lagoa Santa, Minas Gerais",
            tempoViagem: "45min da oitava",
            mapa: "https://www.google.com/maps/dir/Oitava+Igreja+Presbiteriana+de+Belo+Horizonte+-+Rua+Nestor+Soares+de+Melo+-+Palmares,+Belo+Horizonte+-+MG/Mercad%C3%A3o+de+Lagoa+Santa+-+Avenida+Das+%C3%81rvores+-+Jardim+Ip%C3%AA,+Lagoa+Santa+-+MG/@-19.7633405,-44.0660463,11.3z/data=!4m14!4m13!1m5!1m1!1s0xa69a8a26f907b7:0x5294a0301f619653!2m2!1d-43.9292313!2d-19.8745162!1m5!1m1!1s0xa67da3a6beb1fb:0x45000233127d7cf!2m2!1d-43.9136848!2d-19.655508!3e0?authuser=0&entry=ttu&g_ep=EgoyMDI1MTAxMi4wIKXMDSoASAFQAw%3D%3D"
        },
        link: "http://airbnb.com.br/rooms/1223129850678673263?viralityEntryPoint=1&s=76&source_impression_id=p3_1760536250_P39KJ-sA0g6Lph0V&check_in=2025-12-31&guests=8&adults=8&check_out=2026-01-02"
    },
    {
        id: 4,
        nome: "Rancho Amor de pai",
        preco: 1509, // Preço por dia
        acomodacoes: {
            quartos: 3,
            camasCasal: 2,
            camasSolteiro: 4,
            banheiros: 3,
            capacidade: 8
        },
        imagens: ["images/casa4_1.png",
            "images/casa4_2.png",
            "images/casa4_3.png",
            "images/casa4_4.png",
            "images/casa4_5.png",
            "images/casa4_6.png",
            "images/casa4_7.png"
        ],
        localizacao: {
            endereco: "Lagoa Santa, Minas Gerais",
            tempoViagem: "04h20min da oitava",
            mapa: "https://www.google.com/maps/dir/Oitava+Igreja+Presbiteriana+de+Belo+Horizonte+-+Rua+Nestor+Soares+de+Melo+-+Palmares,+Belo+Horizonte+-+MG/CasaBella+Espa%C3%A7o+de+Eventos+-+Rua+D+-+Vale+verde,+Ipaba+-+MG/@-19.7254458,-43.8048481,9z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0xa69a8a26f907b7:0x5294a0301f619653!2m2!1d-43.9292313!2d-19.8745162!1m5!1m1!1s0xb00f2c5862e8d1:0x30040a84ceb0759!2m2!1d-42.3584249!2d-19.4425365!3e0?authuser=0&entry=ttu&g_ep=EgoyMDI1MTAxMi4wIKXMDSoASAFQAw%3D%3D"},
        link: "https://www.airbnb.com.br/rooms/1084820667820382360?viralityEntryPoint=1&s=76&source_impression_id=p3_1760536252_P3wxr6faHolnwEiH&check_in=2025-12-31&guests=8&adults=8&check_out=2026-01-02"
    },
    {
        id: 5,
        nome: "Sitio de Campo - Serra Morena",
        preco: 2970, // Preço por dia
        acomodacoes: {
            quartos: 4,
            camasCasal: 2,
            camasSolteiro: 3,
            colchoeNoChao: "tem sofa cama",
            banheiros: 4,
            capacidade: 9
        },
        imagens: [
            "images/casa5_1.png",
            "images/casa5_2.png",
            "images/casa5_3.png",
            "images/casa5_4.png",
            "images/casa5_5.png",
            "images/casa5_6.png",
            "images/casa5_7.png",
            "images/casa5_8.png",
            "images/casa5_9.png",
            "images/casa5_10.png"
            ],
        localizacao: {
            endereco: "Lagoa Santa, Minas Gerais",
            tempoViagem: "45min da oitava",
            mapa: "https://www.google.com/maps/dir/Oitava+Igreja+Presbiteriana+de+Belo+Horizonte+-+Rua+Nestor+Soares+de+Melo+-+Palmares,+Belo+Horizonte+-+MG/-19.5654853,-43.753895/@-19.7201311,-44.0079036,11z/data=!3m1!4b1!4m10!4m9!1m5!1m1!1s0xa69a8a26f907b7:0x5294a0301f619653!2m2!1d-43.9292313!2d-19.8745162!1m1!4e1!3e0?authuser=0&entry=ttu&g_ep=EgoyMDI1MTAxMi4wIKXMDSoASAFQAw%3D%3D"
        },
        link: "https://www.booking.com/hotel/br/sitio-casa-de-campo-jaboticatubas-condominio-serra-morena.pt-br.html?aid=1702941&label=city-tiradentes-RZctNMmbGEMgkxaPkVOs1AS434528142223%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-2431988250%3Alp9196984%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YdbYVqXDN8zpzadTFvPkU_w&sid=22f3850fae1c2f3e965767e1ce810c7a&all_sr_blocks=1366057901_408890586_8_0_0&checkin=2025-12-31&checkout=2026-01-02&dest_id=-648186&dest_type=city&dist=0&group_adults=8&group_children=0&hapos=3&highlighted_blocks=1366057901_408890586_8_0_0&hpos=3&matching_block_id=1366057901_408890586_8_0_0&no_rooms=1&req_adults=8&req_children=0&room1=A%2CA%2CA%2CA%2CA%2CA%2CA%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1366057901_408890586_8_0_0__297000&srepoch=1760527445&srpvid=9a3a4e48afa80206&type=total&ucfs=1&#map_closed"
    },
    {
        id: 6,
        nome: "Sitio descanso da Serra",
        preco: 2800,
        acomodacoes: {
            quartos: 3,
            camasCasal: 2,
            camasSolteiro: 3,
            colchoeNoChao: "tem sofa cama",
            banheiros: 3,
            capacidade: 9
        },
        imagens: [
            "images/casa6_1.png",
            "images/casa6_2.png",
            "images/casa6_3.png",
            "images/casa6_4.png",
            "images/casa6_5.png",
            "images/casa6_6.png",
            "images/casa6_7.png",
            "images/casa6_8.png",
            "images/casa6_9.png",
            "images/casa6_10.png"
            ],
        localizacao: {
            endereco: "Jaboticatubas, Minas Gerais",
            tempoViagem: "1h10min da Oitava",
            mapa: "https://www.google.com/maps/dir/Oitava+Igreja+Presbiteriana+de+Belo+Horizonte+-+Rua+Nestor+Soares+de+Melo+-+Palmares,+Belo+Horizonte+-+MG/-19.5018995,-43.9027263/@-19.6867524,-44.1118324,11z/data=!3m1!4b1!4m10!4m9!1m5!1m1!1s0xa69a8a26f907b7:0x5294a0301f619653!2m2!1d-43.9292313!2d-19.8745162!1m1!4e1!3e0?authuser=0&entry=ttu&g_ep=EgoyMDI1MTAxMi4wIKXMDSoASAFQAw%3D%3D"
        },
        link: "https://www.booking.com/hotel/br/sitio-descanso-da-serra.pt-br.html?label=city-tiradentes-RZctNMmbGEMgkxaPkVOs1AS434528142223%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-2431988250%3Alp9196984%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YdbYVqXDN8zpzadTFvPkU_w&sid=80cdedb22ef92f8bb2656b8167a89151&aid=1702941&ucfs=1&checkin=2025-12-31&checkout=2026-01-02&dest_id=-629300&dest_type=city&group_adults=8&no_rooms=1&group_children=0&nflt=oos%3D1&srpvid=385d51cab3450d12&srepoch=1760528661&matching_block_id=1383161501_419691094_12_0_0&atlas_src=sr_iw_title#map_closed"
    }
];

// Verifica se já existe um voto armazenado e usuário logado
let contadorVotos = JSON.parse(localStorage.getItem('contadorVotos')) || {};
let usuarioAtual = localStorage.getItem('nomeUsuario');
let votosUsuarios = JSON.parse(localStorage.getItem('votosUsuarios')) || {};

// Converte votos antigos para o novo formato (array)
for (let usuario in votosUsuarios) {
    if (!Array.isArray(votosUsuarios[usuario])) {
        if (votosUsuarios[usuario]) {
            votosUsuarios[usuario] = [votosUsuarios[usuario]];
        } else {
            votosUsuarios[usuario] = [];
        }
    }
}
localStorage.setItem('votosUsuarios', JSON.stringify(votosUsuarios));

// Função para verificar se o usuário atual já usou todos os votos
function usuarioJaVotou() {
    const temVotoExtra = localStorage.getItem('votoExtra_' + usuarioAtual) === 'true';
    const limiteVotos = temVotoExtra ? 2 : 1;
    return votosUsuarios[usuarioAtual] && votosUsuarios[usuarioAtual].length >= limiteVotos;
}

// Função para verificar se o usuário já votou em uma casa específica
function usuarioJaVotouNestaCasa(casaId) {
    return votosUsuarios[usuarioAtual] && votosUsuarios[usuarioAtual].includes(casaId);
}

// Função para obter os votos do usuário atual
function getVotosUsuario() {
    return votosUsuarios[usuarioAtual] || [];
}

// Função para obter o número de votos restantes do usuário
function getVotosRestantes() {
    const votosUsados = votosUsuarios[usuarioAtual] ? votosUsuarios[usuarioAtual].length : 0;
    const temVotoExtra = localStorage.getItem('votoExtra_' + usuarioAtual) === 'true';
    const limiteVotos = temVotoExtra ? 2 : 1;
    return limiteVotos - votosUsados;
}

// Função para limpar todos os dados
function limparTodosOsDados() {
    if (confirm('ATENÇÃO! Isso irá apagar TODOS os dados de votação. Tem certeza?')) {
        localStorage.removeItem('contadorVotos');
        localStorage.removeItem('votosUsuarios');
        
        // Remove todos os votos extras
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('votoExtra_')) {
                localStorage.removeItem(key);
            }
        }
        
        contadorVotos = {};
        votosUsuarios = {};
        alert('Todos os dados foram limpos com sucesso!');
        location.reload();
    }
}

// Função para fazer login
function fazerLogin() {
    const nomeInput = document.getElementById('nomeUsuario');
    const nome = nomeInput.value.trim();
    
    if (nome === 'admin123') {
        const senha = prompt('Digite a senha de administrador:');
        if (senha === 'oitava2025') {
            const adminPanel = document.createElement('div');
            adminPanel.className = 'admin-panel';
            adminPanel.innerHTML = `
                <div style="position: fixed; top: 10px; right: 10px; background: #ff6b6b; padding: 10px; border-radius: 5px; z-index: 1000;">
                    <h3>Painel Admin</h3>
                    <button onclick="limparTodosOsDados()" style="background: #dc3545; color: white; border: none; padding: 5px 10px; border-radius: 3px;">
                        🗑️ Limpar Todos os Dados
                    </button>
                </div>
            `;
            document.body.appendChild(adminPanel);
            return;
        }
    }
    
    if (nome.length < 2) {
        alert('Por favor, digite um nome válido!');
        return;
    }
    
    localStorage.setItem('nomeUsuario', nome);
    usuarioAtual = nome;
    
    // Mostra o conteúdo principal e esconde a seção de login
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    
    // Adiciona o nome do usuário no topo
    const header = document.querySelector('header');
    const userInfo = document.createElement('div');
    userInfo.className = 'user-info';
    userInfo.innerHTML = `<span>👋 Olá, ${nome}!</span> <button onclick="logout()">🚪 Sair</button>`;
    header.appendChild(userInfo);
    
    criarCards();
}

// Função para fazer logout
function logout() {
    localStorage.removeItem('nomeUsuario');
    location.reload();
}

// Função para navegar no carrossel
function navegarCarrossel(cardId, direcao) {
    const carousel = document.querySelector(`#carousel-${cardId}`);
    const imagens = carousel.querySelectorAll('img');
    const dots = carousel.querySelectorAll('.carousel-dot');
    let activeIndex = Array.from(imagens).findIndex(img => img.classList.contains('active'));
    
    // Remove classe active da imagem atual
    imagens[activeIndex].classList.remove('active');
    dots[activeIndex].classList.remove('active');
    
    // Calcula novo índice
    if (direcao === 'next') {
        activeIndex = (activeIndex + 1) % imagens.length;
    } else {
        activeIndex = (activeIndex - 1 + imagens.length) % imagens.length;
    }
    
    // Adiciona classe active na nova imagem
    imagens[activeIndex].classList.add('active');
    dots[activeIndex].classList.add('active');
}

// Função para mostrar imagem específica
function mostrarImagem(cardId, index) {
    const carousel = document.querySelector(`#carousel-${cardId}`);
    const imagens = carousel.querySelectorAll('img');
    const dots = carousel.querySelectorAll('.carousel-dot');
    
    imagens.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    imagens[index].classList.add('active');
    dots[index].classList.add('active');
}

// Função para criar os cards das casas
function criarCards() {
    console.log('Criando cards...');
    
    // Cria cards para BH
    const containerBH = document.getElementById('casasBHContainer');
    console.log('Container BH:', containerBH);
    if (containerBH) {
        criarCardsParaRegiao(containerBH, casasBH);
    } else {
        console.error('Container BH não encontrado!');
    }
    
    // Cria cards para Guarapari
    const containerGuarapari = document.getElementById('casasGuarapariContainer');
    console.log('Container Guarapari:', containerGuarapari);
    console.log('Casas Guarapari:', casasGuarapari);
    if (containerGuarapari && Array.isArray(casasGuarapari) && casasGuarapari.length > 0) {
        criarCardsParaRegiao(containerGuarapari, casasGuarapari);
    } else {
        console.error('Container Guarapari não encontrado ou sem casas!');
        if (containerGuarapari) {
            containerGuarapari.innerHTML = '<p>Nenhuma casa disponível em Guarapari no momento.</p>';
        }
    }
}

// Função auxiliar para criar cards em uma região específica
function criarCardsParaRegiao(container, casas) {
    if (!container || !casas) {
        console.log('Container ou array de casas inválido');
        return;
    }
    console.log(`Criando ${casas.length} cards para o container`);
    container.innerHTML = ''; // Limpa o container antes de criar os cards
    
    casas.forEach(casa => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // Cria o carrossel
        let carouselHTML = `
            <div class="card-carousel" id="carousel-${casa.id}">
                <button class="carousel-arrow prev" onclick="navegarCarrossel(${casa.id}, 'prev')">❮</button>
                <button class="carousel-arrow next" onclick="navegarCarrossel(${casa.id}, 'next')">❯</button>
        `;
        
        // Adiciona as imagens
        casa.imagens.forEach((img, index) => {
            carouselHTML += `
                <img src="${img}" alt="${casa.nome} - Foto ${index + 1}" 
                    class="${index === 0 ? 'active' : ''}" 
                    onerror="this.src='https://via.placeholder.com/300x200'">
            `;
        });
        
        // Adiciona os dots de navegação
        carouselHTML += '<div class="carousel-nav">';
        for (let i = 0; i < casa.imagens.length; i++) {
            carouselHTML += `
                <span class="carousel-dot ${i === 0 ? 'active' : ''}" 
                    onclick="mostrarImagem(${casa.id}, ${i})"></span>
            `;
        }
        carouselHTML += '</div></div>';
        
        const precoPorPessoa = (casa.preco / 8).toFixed(2);
        
        card.innerHTML = `
            ${carouselHTML}
            <div class="card-content">
                <h2 class="card-title">${casa.nome}</h2>
                <p class="card-price">R$ ${casa.preco}</p>
                <p class="card-price">R$ ${precoPorPessoa} por pessoa</p>
                
                <div class="info-section">
                    <h3>Acomodações</h3>
                    ${casa.acomodacoes ? `
                        <div class="info-item">
                            <i>🛏️</i> ${casa.acomodacoes.quartos} quartos
                        </div>
                        <div class="info-item">
                            <i>👫</i> ${casa.acomodacoes.camasCasal} camas de casal
                        </div>
                        <div class="info-item">
                            <i>👤</i> ${casa.acomodacoes.camasSolteiro} camas de solteiro
                        </div>
                        <div class="info-item">
                            <i>👤</i> ${casa.acomodacoes.colchoeNoChao} Colchões no chão
                        </div>
                        <div class="info-item">
                            <i>🚽</i> ${casa.acomodacoes.banheiros} banheiros
                        </div>
                        <div class="info-item">
                            <i>👥</i> Capacidade: ${casa.acomodacoes.capacidade} pessoas
                        </div>
                    ` : ''}
                </div>

                <div class="info-section">
                    <h3>Localização e Acesso</h3>
                    <div class="info-item">
                        <i>📍</i> ${casa.localizacao.endereco}
                    </div>
                    <div class="info-item">
                        <i>🚗</i> ${casa.localizacao.tempoViagem}
                    </div>
                    ${casa.localizacao.mapa ? `
                        <a href="${casa.localizacao.mapa}" target="_blank" class="mapa-link">
                            <i>🗺️</i> Ver no Google Maps
                        </a>
                    ` : ''}
                </div>

                <a href="${casa.link}" target="_blank">Ver mais detalhes</a>
                
                <div class="voting-buttons">
                    <button 
                        class="vote-button" 
                        onclick="votar(${casa.id})"
                        ${usuarioJaVotouNestaCasa(casa.id) || usuarioJaVotou() ? 'disabled' : ''}
                    >
                        ${usuarioJaVotouNestaCasa(casa.id) ? 'Votado!' : 
                          usuarioJaVotou() ? 'Sem votos restantes' :
                          `Votar (${getVotosRestantes()} ${getVotosRestantes() === 1 ? 'voto restante' : 'votos restantes'})`}
                    </button>

                    ${!usuarioJaVotouNestaCasa(casa.id) && votosUsuarios[usuarioAtual]?.length === 1 && !localStorage.getItem('votoExtra_' + usuarioAtual) ? `
                        <button onclick="mostrarBotaoVotoExtra()" class="start-game-btn" style="margin-top: 1rem;">
                            🎮 Clique aqui para tentar ganhar +1 voto!
                        </button>
                    ` : ''}
            </div>
        `;
        
        container.appendChild(card);
    });
    
    atualizarResultados();
}

// Função para registrar o voto
function votar(casaId) {
    if (!usuarioAtual) {
        alert('Por favor, faça login primeiro!');
        return;
    }
    
    if (usuarioJaVotouNestaCasa(casaId)) {
        alert('Você já votou nesta casa!');
        return;
    }
    
    const votosAtuais = votosUsuarios[usuarioAtual] || [];
    const temVotoExtra = localStorage.getItem('votoExtra_' + usuarioAtual) === 'true';
    const limiteVotos = temVotoExtra ? 2 : 1;
    
    if (votosAtuais.length >= limiteVotos) {
        if (votosAtuais.length >= 1 && !temVotoExtra) {
            jogarPedraPapelTesoura();
        } else {
            alert('Você já usou todos os seus votos!');
        }
        return;
    }
    
    // Inicializa o array de votos do usuário se necessário
    if (!votosUsuarios[usuarioAtual]) {
        votosUsuarios[usuarioAtual] = [];
    }
    
    // Adiciona o voto ao array de votos do usuário
    votosUsuarios[usuarioAtual].push(casaId);
    localStorage.setItem('votosUsuarios', JSON.stringify(votosUsuarios));
    
    // Atualiza o contador
    contadorVotos[casaId] = (contadorVotos[casaId] || 0) + 1;
    localStorage.setItem('contadorVotos', JSON.stringify(contadorVotos));
    
    alert(`Voto registrado com sucesso! ${
        votosAtuais.length + 1 >= limiteVotos ? 
        'Você usou todos os seus votos.' : 
        `Você ainda tem ${limiteVotos - (votosAtuais.length + 1)} ${limiteVotos - (votosAtuais.length + 1) === 1 ? 'voto' : 'votos'} restante${limiteVotos - (votosAtuais.length + 1) === 1 ? '' : 's'}.`
    }`);
    
    // Atualiza a interface
    criarCards(); // Recria os cards para mostrar o botão do jogo se necessário
    atualizarResultados();
}

// Função para atualizar os botões de votação
function atualizarBotoesVotacao() {
    const todasCasas = [...casasBH, ...casasGuarapari];
    document.querySelectorAll('.vote-button').forEach(button => {
        const casaNome = button.parentElement.parentElement.querySelector('.card-title').textContent;
        const casa = todasCasas.find(c => c.nome === casaNome);
        
        if (usuarioJaVotouNestaCasa(casa.id)) {
            button.textContent = 'Votado!';
            button.disabled = true;
        } else if (usuarioJaVotou()) {
            button.disabled = true;
            button.textContent = 'Sem votos restantes';
        } else {
            button.disabled = false;
            const votosRestantes = getVotosRestantes();
            button.textContent = `Votar (${votosRestantes} ${votosRestantes === 1 ? 'voto restante' : 'votos restantes'})`;
        }
    });
}

// Função para atualizar a exibição dos resultados
function atualizarResultados() {
    console.log('Atualizando resultados...');
    
    const todasCasas = [...casasBH, ...casasGuarapari];
    console.log('Total de casas:', todasCasas.length);
    
    const resultadoDiv = document.getElementById('votingResult');
    if (!resultadoDiv) {
        console.log('Elemento votingResult não encontrado');
        return;
    }
    
    const usuarios = Object.keys(votosUsuarios);
    console.log('Usuários:', usuarios);
    
    const totalVotos = Object.values(contadorVotos).reduce((a, b) => a + b, 0);
    console.log('Total de votos:', totalVotos);
    
    let resultadoHTML = '<div class="resultados-container">';
    resultadoHTML += '<h2>Resultados da votação</h2>';
    
    // Cria a tabela de resultados
    resultadoHTML += '<table class="resultados-table">';
    
    // Cabeçalho da tabela
    resultadoHTML += '<tr><th>Informações</th>';
    todasCasas.forEach(casa => {
        resultadoHTML += `<th>${casa.nome}</th>`;
    });
    resultadoHTML += '</tr>';
    
    // Linha de total de votos
    resultadoHTML += '<tr><td>Total de votos</td>';
    todasCasas.forEach(casa => {
        const votos = contadorVotos[casa.id] || 0;
        const porcentagem = totalVotos > 0 ? ((votos / totalVotos) * 100).toFixed(1) : '0.0';
        resultadoHTML += `<td>${votos} (${porcentagem}%)</td>`;
    });
    resultadoHTML += '</tr>';
    
    // Linha de valor por pessoa
    resultadoHTML += '<tr><td>Valor por pessoa/dia</td>';
    todasCasas.forEach(casa => {
        const precoPorPessoa = (casa.preco / 8).toFixed(2);
        resultadoHTML += `<td>R$ ${precoPorPessoa}</td>`;
    });
    resultadoHTML += '</tr>';
    
    if (usuarios.length > 0) {
        // Votos individuais
        resultadoHTML += '<tr><td colspan="' + (todasCasas.length + 1) + '" class="subtitulo">Votos por pessoa</td></tr>';
        
        // Adiciona uma linha para cada usuário
        usuarios.sort().forEach(usuario => {
            resultadoHTML += `<tr><td>${usuario}</td>`;
            todasCasas.forEach(casa => {
                let votosDoUsuario = votosUsuarios[usuario];
                // Verifica se o voto está no formato antigo e converte
                if (!Array.isArray(votosDoUsuario)) {
                    votosDoUsuario = votosDoUsuario ? [votosDoUsuario] : [];
                }
                const votouNestaCasa = votosDoUsuario.includes(casa.id);
                resultadoHTML += `<td>${votouNestaCasa ? '✓' : ''}</td>`;
            });
            resultadoHTML += '</tr>';
        });
    }
    
    resultadoHTML += '</table></div>';
    resultadoDiv.innerHTML = resultadoHTML;
}

// Função para mostrar o botão de voto extra como um pop-up
function mostrarBotaoVotoExtra() {
    const popup = document.createElement('div');
    popup.className = 'vote-extra-popup';
    popup.innerHTML = `
        <div class="vote-extra-content">
            <h2>🎮 ATENÇÃO! 🎮</h2>
            <p class="blink">Você tem uma chance de ganhar um voto extra!</p>
            <div class="vote-extra-message">
                <p>Derrote o computador em uma melhor de 3 no</p>
                <h3>PEDRA, PAPEL e TESOURA</h3>
                <p>e ganhe +1 VOTO!</p>
            </div>
            <button onclick="iniciarJogo()" class="start-game-btn">👊 CLIQUE AQUI PARA JOGAR! 🎮</button>
            <button onclick="fecharPopupVotoExtra()" class="close-popup-btn">Não, obrigado</button>
        </div>
    `;
    document.body.appendChild(popup);

    // Adiciona animação de entrada
    setTimeout(() => {
        popup.classList.add('active');
    }, 10);
}

// Função para fechar o popup do voto extra
function fecharPopupVotoExtra() {
    const popup = document.querySelector('.vote-extra-popup');
    if (popup) {
        popup.classList.remove('active');
        setTimeout(() => {
            popup.remove();
        }, 300);
    }
}

// Função para iniciar o jogo a partir do popup
function iniciarJogo() {
    fecharPopupVotoExtra();
    setTimeout(jogarPedraPapelTesoura, 300);
}

// Adiciona o evento de login no botão
document.addEventListener('DOMContentLoaded', function() {
    const btnLogin = document.getElementById('btnLogin');
    if (btnLogin) {
        btnLogin.addEventListener('click', fazerLogin);
    }
});

// Funções do Jogo Pedra, Papel e Tesoura
let playerWins = 0;
let computerWins = 0;

function jogarPedraPapelTesoura() {
    const gameModal = document.createElement('div');
    gameModal.className = 'game-modal';
    gameModal.innerHTML = `
        <div class="game-content">
            <h2>🎮 Jogue para ganhar um voto extra!</h2>
            <p>Vença o computador em melhor de 3 para ganhar mais um voto.</p>
            <div class="game-score">
                <span>Você: <span id="playerScore">0</span></span>
                <span>Computador: <span id="computerScore">0</span></span>
            </div>
            <div class="game-options">
                <button onclick="jogar('pedra')">🗿</button>
                <button onclick="jogar('papel')">📄</button>
                <button onclick="jogar('tesoura')">✂️</button>
            </div>
            <div id="gameResult"></div>
            <button onclick="fecharJogo()" class="close-game">Fechar</button>
        </div>
    `;
    document.body.appendChild(gameModal);
}

function jogar(escolhaJogador) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];
    
    const resultado = determinarVencedor(escolhaJogador, escolhaComputador);
    const gameResult = document.getElementById('gameResult');
    
    gameResult.innerHTML = `
        Você escolheu ${getEmoji(escolhaJogador)} vs ${getEmoji(escolhaComputador)} do Computador<br>
        ${resultado}
    `;
    
    document.getElementById('playerScore').textContent = playerWins;
    document.getElementById('computerScore').textContent = computerWins;
    
    verificarFimDeJogo();
}

function getEmoji(escolha) {
    switch(escolha) {
        case 'pedra': return '🗿';
        case 'papel': return '📄';
        case 'tesoura': return '✂️';
    }
}

function determinarVencedor(jogador, computador) {
    if (jogador === computador) return "Empate! 🤝";
    
    if ((jogador === 'pedra' && computador === 'tesoura') ||
        (jogador === 'papel' && computador === 'pedra') ||
        (jogador === 'tesoura' && computador === 'papel')) {
        playerWins++;
        return "Você venceu! 🎉";
    } else {
        computerWins++;
        return "Computador venceu! 🤖";
    }
}

function verificarFimDeJogo() {
    if (playerWins >= 2) {
        document.getElementById('gameResult').innerHTML += `
            <br><strong>🎉 Parabéns! Você ganhou um voto extra! 🎉</strong>
        `;
        setTimeout(() => {
            concederVotoExtra();
            fecharJogo();
        }, 2000);
    } else if (computerWins >= 2) {
        document.getElementById('gameResult').innerHTML += `
            <br><strong>🤖 HAHAHA! O computador é imbatível! 🏆</strong>
            <br><span>Você perdeu! Mais sorte na próxima vez... 😢</span>
        `;
        setTimeout(() => {
            alert('🤖 O computador venceu! Você continua com apenas 2 votos!\n\n"Humanos... tão previsíveis!" - Computador');
            fecharJogo();
        }, 2000);
    }
}

function concederVotoExtra() {
    localStorage.setItem('votoExtra_' + usuarioAtual, 'true');
    criarCards(); // Recria todos os cards para atualizar os botões
    alert('🎉 Parabéns! Agora você tem direito a mais um voto!');
}

function fecharJogo() {
    const gameModal = document.querySelector('.game-modal');
    if (gameModal) {
        gameModal.remove();
    }
    // Reseta o estado do jogo
    playerWins = 0;
    computerWins = 0;
    // Recria os cards para atualizar a interface
    criarCards();
}

// Inicializa a página
window.onload = function() {
    console.log('Inicializando página...');
    
    if (usuarioAtual) {
        console.log('Usuário logado:', usuarioAtual);
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        
        const header = document.querySelector('header');
        const userInfo = document.createElement('div');
        userInfo.className = 'user-info';
        userInfo.innerHTML = `<span>👋 Olá, ${usuarioAtual}!</span> <button onclick="logout()">🚪 Sair</button>`;
        header.appendChild(userInfo);
    }
    
    // Sempre criar os cards e atualizar resultados, independente do login
    criarCards();
    atualizarResultados();
};