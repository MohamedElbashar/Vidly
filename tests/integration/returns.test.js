/** @format */
const { Rentals } = require("../../models/rental");
const mongoose = require("mongoose");
const request = require("supertest");
describe("/api/returns", () => {
  let server;
  let rental;
  let customerId;
  let movieId;
  beforeEach(async () => {
    server = require("../../index");

    customerId = mongoose.Types.ObjectId();
    movieId = mongoose.Types.ObjectId();

    rental = new Rentals({
      customer: {
        _id: customerId,
        name: "12345",
        phone: "12345",
      },
      movie: {
        _id: movieId,
        title: "12345",
        dailyRentalRate: 2,
      },
    });
    await rental.save();
  });
  afterEach(async () => {
    await server.close();
    await Rentals.remove();
  });
  it("should return 401 if the client is not logged in", async () => {
    const res = await request(server)
      .post("/api/returns")
      .send({ customerId, movieId });
    expect(res.status).toBe(401);
  });
});
