const express = require("express");
const ColumnsRouter = express.Router();
const { getColumns, addColumn, deleteColumn } = require("../controllers/columns");

ColumnsRouter.route("/").get(getColumns).post(addColumn);

ColumnsRouter.route("/:id").delete(deleteColumn);

module.exports = ColumnsRouter;
