module.exports = {
    dialect:'postgres',
    host: 'localhost',
    port:5432,
    username:'postgres',
    password:'postgres',
    database:'devburgerDb',

    define: {
      timestamps: true, // Cria automaticamente os campos created_at e updated_at
      underscored: true, // Utiliza snake_case para os nomes das colunas
      underscoredAll: true, // Utiliza snake_case para os nomes das tabelas e colunas
    },  
  
  }