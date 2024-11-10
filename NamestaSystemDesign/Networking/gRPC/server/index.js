const PROTO_PATH = "./customers.proto"

const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
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
        let customer = customers.find(n => n.id == call.request.id)

        if (customer) {
            callback(null, customer);
        } else {
            callback ({
                code: grpc.status.NOT_FOUND,
                details: "Not found"
            })
        }
    },
    insert: (call, callback) => {
        let customer = call.request;

        customer.id = Math.random(); // Usually not recommended, use uuidv4
        customers.push(customer);
        callback(null, customer);
    },
    update: (call, callback) => {
        let existingCustomer = customers.find(n => n.id == call.request.id)
        
        if (existingCustomer) {
            existingCustomer.name = call.request.name;
            existingCustomer.age = call.request.age;
            existingCustomer.address = call.request.address;
            callback(null, existingCustomer);
        } else {
            callback ({
                code: grpc.status.NOT_FOUND,
                details: "Not found"
            })
        }
    },
    remove: (call, callback) => {
        let existingCustomerIndex = customers.findIndex(
            n => n.id == call.request.id
        );

        if (existingCustomerIndex != -1) {
            customers.splice(existingCustomerIndex, 1)
            callback(null, {})
        } else {
            callback ({
                code: grpc.status.NOT_FOUND,
                details: "Not found"
            })
        }
    },
})

server.bindAsync("127.0.0.1:30043", grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error(`Error starting gRPC server: ${err}`);
    } else {
        server.start();
        console.log(`gRPC server is listening on ${port}`)
    }
});
