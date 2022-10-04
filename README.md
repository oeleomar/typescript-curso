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

### Informações

#### Tipos

- :number
- :string
- :boolean
- :symbol
- :tipo[] || Array\<tipo>
