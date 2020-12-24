var DBconfigs = {
    localdb: {
        urldb : 'mongodb+srv://Toan123:Toan123@cluster0.9yrzf.mongodb.net/ExampleDB?retryWrites=true&w=majority',
        dbname : "ExampleDB",
        dbusername : "",
        dbpassword : "",
    },

    clouddb: {
        urldb : "mongodb+srv://Toan123:Toan123@cluster0.9yrzf.mongodb.net/ExampleDB?retryWrites=true&w=majority",
        dbname : "ExampleDB",
        dbusername : "",
        dbpassword : "",
    }

};

module.exports = DBconfigs.clouddb;