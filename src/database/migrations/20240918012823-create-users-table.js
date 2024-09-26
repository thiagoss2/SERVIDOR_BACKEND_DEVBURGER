
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users',{
   
    id: {
       primaryKey:true,  // cria uma chave primaria na tabela
       allowNull:false, // a chave primaria não pode estar vazia
       type:Sequelize.UUID, // tipa o tipo como UUID
        defaultValue:Sequelize.UUIDV4, // cria um codigo hexadecimal para o id abc9498fgs3093r0df04390
    },
    name: {
      type:Sequelize.STRING,
      allowNull:false , // o campo não pode ser nulo ou seja o mome do usuario precisa existir
   }, 

    email: {
      type:Sequelize.STRING,
      allowNull: false, // O email do usuario deve existir não pode ficar vazio
      unique:true  // O sistema não pode aceitar email duplicado exemplo email cpf e telefone  
    } ,

    // criptografa a senha para que ninguem possa acessa-la não salvamos senha no banco de dados mas o hash da senha
   password_hash: {
     type:Sequelize.STRING,
     allowNull:false,
   },
     // temos dois usuários no sistema e precisamos criar o campo admin para o sistema saber se ele é um usuário comum ou administrador
     admin: {
      type:Sequelize.BOOLEAN,
      defaultValue:false // força o sistema a criar um usuário comum que não é um adiministrador
    },
    
    // verifica quando a tabela foi criada no caso a data e a hora 
    created_at: {
     
      type:Sequelize.DATE,
      allowNull: false

    },
    // verifica quando a tabela foi atualizada
    updated_at: {
      type:Sequelize.DATE,
      allowNull: false

    }
    
    });
  },

  async down (queryInterface) {
      await queryInterface.dropTable('users');
     
  }
};
