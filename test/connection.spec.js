var RouterOSClient = require("../dist").RouterOSClient;
var chai = require("chai");
require("mocha");

const should = chai.should();

const address = "10.62.0.25";

describe("RouterOSClient", () => {

    describe("#connect", () => {

        it("should connect with valid username and password", (done) => {
            const conn = new RouterOSClient({
                host: address,
                user: "admin",
                password: "admin"
            });

            conn.connect().then((api) => {
                should.exist(api);
                conn.close();
                done();
            }).catch((err) => {
                should.not.exist(err);
                done(err);
            });
        });

        it("should not connect with invalid username and password", (done) => {
            const conn = new RouterOSClient({
                host: address,
                user: "admin1",
                password: "admin1"
            });

            conn.connect().then((api) => {
                should.not.exist(api);
                conn.close();
                done();
            }).catch((err) => {
                should.exist(err);
                done();
            });

        });

    });


});