# Guia Simples de Git para Iniciantes

Este guia é para quem está começando a usar o **Git** e quer entender os comandos básicos para trabalhar com projetos no **GitHub**. Ele explica de forma simples como baixar um projeto, enviar suas alterações e atualizar seu repositório.

## 1. Baixar um Projeto de Alguém
Para copiar um projeto do GitHub para o seu computador, use o comando abaixo. Ele cria uma pasta com o projeto no seu computador.

```bash
git clone <URL_DO_REPOSITORIO>
```

```bash
git clone https://github.com/thiagok2/lekflix.git
```



- **Exemplo**: `git clone https://github.com/thiagok2/lekflix.git`
- Isso baixa todo o projeto para uma pasta com o mesmo nome do repositório.

## 2. Criar e Enviar Seu Próprio Projeto
Se você criou um projeto no GitHub e quer conectá-lo ao seu computador, siga estes passos:

### a) Conectar seu projeto local ao GitHub
Depois de criar um repositório no GitHub, vincule seu projeto local com o comando:

```bash
git remote add origin https://github.com/seu_usuario/nome_do_repositorio.git
```

- **Exemplo**: `git remote add origin https://github.com/joaolorenco/lekflix.git`
- Isso associa seu projeto local ao repositório no GitHub.

### b) Adicionar arquivos para envio
Para preparar seus arquivos para serem enviados ao GitHub, use:

```bash
git add *
```

- Isso seleciona **todos os arquivos** modificados ou novos no seu projeto.

### c) Salvar suas alterações
Depois de adicionar os arquivos, você precisa "salvar" suas mudanças com uma mensagem que descreva o que foi feito:

```bash
git commit -m "mensagem do commit"
```

- **Exemplo**: `git commit -m "Adicionei a página inicial"`
- A mensagem deve ser curta e explicar o que você mudou.

### d) Enviar as alterações para o GitHub
Para enviar seus arquivos para o repositório no GitHub, use:

```bash
git push origin main
```

- Isso envia suas alterações para a branch principal (chamada `main`).

## 3. Atualizar seu Projeto com Mudanças do GitHub
Se outras pessoas alteraram o projeto no GitHub, você pode baixar as atualizações para o seu computador com:

```bash
git pull origin main
```

- Isso sincroniza seu projeto local com a versão mais recente do repositório no GitHub.

## Dicas Finais
- **Tenha cuidado com `git add *`**: Ele adiciona todos os arquivos, até os que você pode não querer enviar. Use `git add <nome_do_arquivo>` para selecionar arquivos específicos.
- **Mensagens de commit**: Sempre escreva mensagens claras para ajudar a entender o que foi alterado.
- **Verifique a branch**: Este guia assume que você está usando a branch `main`. Se o repositório usa outra branch (como `master`), substitua `main` pelo nome correto.

Se precisar de mais ajuda, pergunte! 🚀