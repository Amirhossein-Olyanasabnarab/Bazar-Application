const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

function swaggerConfig(app){
    const swaggerDocument = swaggerJsDoc({
        swaggerDefinition: {
            openapi: "3.0.1",
            info: {
                title: "Bazar Web Application",
                description: "End points of Bazar app",
                version: "1.0.0",
                contact: {
                    name: "Amir Hossein",
                    email: "amirholyanasabnarab@gmail.com"
                }
            }
        },
        apis: []
    });
    const swagger = swaggerUI.setup(swaggerDocument, {});
    app.use("/swagger", swaggerUI.serve, swagger);
}

module.exports = swaggerConfig;