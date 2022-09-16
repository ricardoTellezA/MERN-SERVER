const moongose = require("mongoose");

const conectarDB = async () => {
  try {
    moongose.connect(
      process.env.BBDD,

      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: true,
        // useCreateIndex: true,
      },
     
    );
  } catch (error) {
    console.log(error, "Hubo un error");
    process.exit(1); //detiene la app
  }
};


module.exports = conectarDB;