/** @format */
const { Rentals } = require("../../models/rental");
const mongoose = require("mongoose");

describe("/api/returns", () => {
  let server;
  let rental;
  let customerId;
  let movieId;
  beforeEach(async () => {
    server = require("../../index");

    customerId = mongoose.ObjectId();
    movieId = mongoose.ObjectId();

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
    server.close();
    await Rentals.remove();
  });
  it("should be work", async () => {
    const result = await Rentals.findById(rental._id);
    expect(result).not.toBeNull;
  });
});
