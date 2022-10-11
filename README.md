# typescript-curso

Registro de aprendizados do Superset de Javascript

### Processos

- Iniciar um repositório NODE - npm init
- Instalar o Typescript como DevDependence - npm i -D typescript
- Instalar o ts-node - npm i -D ts-node
- Confugurar o Code runner - Criar pasta .vscode/settings.json
- Configurações:
  "code-runner.executorMap": {
  "typescript": "npx ts-node --files --transpile-only",
  }
- Instalando e Configurando Eslint - npm i -D eslint
- Instalando plugins eslint para typescript - npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
- Configurando Eslint - npx eslint --init
- Instalando o Prettier - npm i -D prettier eslint-config-prettier eslint-plugin-prettier
- Configurando prettier em .prettierrc.js
  - semi: true,
  - trailingComa: 'all',
  - singleQuote: true,
  - printWidth: 80,
  - tabWidth: 2,
- Configurando TSC - npx tsc --init
  - Target: Padrão
  - module: Padrão
  - lib: ["ESNext", "DOM"]
  - outDir: "./dist",
  - strict: true
  - Fora do compilerOptions: "include": [
    "./src"
    ],
- Para compilar o projeto - npx tsc

##### Configurando WebPack

- <a href="https://webpack.js.org/">Documentação</a>
- <a href="https://webpack.js.org/guides/typescript/">Documentação Typescript</a>

- Para realizar bundler quando trabalhar com front-end
- npm i ts-loader webpack webpack-cli -D --- Instalar webpack, o webpack cli e o ts loader
- Na raiz do projeto criar arquivo chamado webpack.config.js
- Realizar as configurações encontrada na documentação
- Utilizar a mesma pasta de saída no webpack e no tsconfig
- npx webpack --- Para compilar o código em uma pasta
- npx webpack -w --- Para assistir mudanças e compilar o código

### Informações

#### Tipos

- :number
- :string
- :boolean
- :symbol
- :tipo[] || Array\<tipo>

### POO - Programação Orientada a Objetos

#### Pilares

- Abstração
  - Permite isolar de um objeto somente os conceitos que são necessários para o funcionamentodo programa
  - Ex: Corpo humano é complexo, porém posso ter uma classe que precise apenas do nome e sobrenome da pessoa
- Encapsulamento
  - Visa ocultar partes internas de um objeto e exibir apenas o necessário para o uso externo
  - Ex: Controle remoto, não precisa saber como ele funcionar apenas apertar o botão
- Herânça
  - Visa passar caracteristicas de um objeto para o outro
  - Ex: Class cachorro herdando class Animal
- Polimorfismo
  -
