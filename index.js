const express = require('express'); // importamos express
const cors = require('cors'); // importamos cors

const app = express(); // creamos una instancia de express
const PORT = 3000; // definimos el puerto

//importamos las rutas
const usersRoutes = require('./routes/users.routes');
const productsRoutes = require('./routes/products.routes');


app.use(cors()); // habilitamos CORS
app.use(express.json()); // Parseamos el cuerpo de las peticiones como JSON

//rutas
app.use('/usuarios', usersRoutes); // ruta usuarios
app.use('/productos', productsRoutes); // ruta productos

//iniciamos servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


