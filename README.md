# Trybers and Dragons

Este é um projeto desenvolvido durante o módulo de Back-end do curso de Desenvolvimento Web da Trybe.

<strong>As pastas Archetypes, Fighter, Races, Battle (exceto o arquivo Battle.ts), assim como os arquivos Character, Dragon, Energy, Monster e index, foram desenvolvidos por mim, de acordo com os requisitos propostos pela Trybe. O restante da aplicação é de autoria da Trybe.</strong>

<details>
<summary><strong>O que foi desenvolvido</strong></summary><br />
Neste projeto aplicamos os princípios da arquitetura SOLID e os princípios de POO em uma estrutura de jogos RPG (Role Playing Game).
</details>

<details>
<summary><strong>Como rodar o projeto</strong></summary><br />
<strong>Rodando com Docker</strong>

Rode o serviço node com o comando docker-compose up -d.

    Esse serviço irá inicializar um container chamado trybers_and_dragons.
    A partir daqui você pode rodar o container trybers_and_dragons via CLI ou abri-lo no VS Code.


Use o comando docker exec -it trybers_and_dragons bash.

    Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

Instale as dependências com npm install

<strong>Rodando sem Docker</strong>

Instale as dependências com npm install

Atenção: Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

Para rodar o projeto desta forma, obrigatoriamente você deve ter o node instalado em seu computador.

</details>