/** @format */
const mongoose = require("mongoose");
const Joi = require("joi");
const express = require("express");
const router = express.Router();

const Customers = mongoose.model(
    "Customer",
    new mongoose.Schma({
        name: {
            type: String,
            required: true,
            minLength: 5,
            maxLength: 255,
        },
        isGold: Boolean,
        phone: {
            type: Number,
            required: true,
            min: 5,
            max: 50,
        },
    })
);