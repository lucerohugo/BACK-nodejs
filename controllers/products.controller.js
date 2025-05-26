//funcionalidades
const fs = require('fs'); //importar fs
const path = require('path'); //importar path
const filePath = path.join(__dirname, '../db/products.json'); //ruta del archivo json

const leerProductos = () => {
    const data = fs.readFileSync(filePath, 'utf8'); //leer el archivo
    return JSON.parse(data); //convertir a json
}

let productos =  leerProductos() //lee el archivo json y lo convierte a un objeto js

const escribirProductos = (productos) => {
    fs.writeFileSync(filePath, JSON.stringify(productos, null, 2)); //escribir el archivo
}

const getProducts = (req, res) => {
    res.json({data: productos, status: 200, message: 'Producots obtenidos de manera exitosa'}); 
    
}

//funcion que obtiene un producto a traves de su id
const getProductById = (req, res) => {
    const producto = productos.find(item => item.id === parseInt(req.params.id)); //busqueda del producto por id
    if(!producto) return res.json({status: 404, message:'Producto no encontrado'}) 
    res.json({data: producto, status:200, message: 'Producto encontrado'}) 
}

//funcion que crea un nuevo producto
const createProduct = (req, res) => {
    const nuevoProducto = req.body
    nuevoProducto.id = productos.length + 1
    productos.push(nuevoProducto)
    escribirProductos(productos) //deberia guardarse en el archivo productos.json
    res.json({status:201, data: nuevoProducto, message:'Producto creado exitosamente'})
}

//funcion que edita un producto
const updateProduct = (req, res) => {
    const producto = productos.find(item => item.id === parseInt(req.params.id));
    if(!producto) return res.json({status: 404, message:'Producto no encontrado'})
    const {nombre, precio} = req.body //destructuracion
    producto.nombre = nombre || producto.nombre
    producto.precio = precio || producto.precio

    escribirProductos(productos) //deberia guardarse en el archivo productos.json

    res.json({status:201, message:'Producto editado exitosamente'})
}

//funcion que elimina un producto
const deleteProduct = (req, res) => {
    let producto = productos.find(item => item.id === parseInt(req.params.id));
    if(!producto) return res.json({status: 404, message:'Producto no encontrado'})

    productos = productos.filter(item => item.id !== producto.id)

    escribirProductos(productos) //deberia guardarse en el archivo

    res.json({status:201, message: 'Producot eliminado exitosamente'})
}

//exportar
module.exports={
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}



