const PROTO_PATH = "./customers.proto"

const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: trues
});

const customerProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

const customers = [{
    id: '1',
    name: 'Ravi',
    age: 27,
    address: 'CBE'
}, {
    id: '2',
    name: 'Raviprasaath',
    age: 27,
    address: 'BNG'
}
]

server.addService(customerProto.CustomerService.service, {
    getAll: (call, callback) => {
        callback(null, { customers });
    },
    get: (call, callback) => {

    },
    insert: (call, callback) => {

    },
    update: (call, callback) => {

    },
    remove: (call, callback) => {

    },
})

server.bind("127.0.0.1:30043", grpc.ServerCredentials.createInsecure());
server.start();
