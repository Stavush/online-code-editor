const express = require("express");
const codeblockRoutes = express.Router();
let Codeblock = require("../db/codeblockSchema");

// Get all code blocks
codeblockRoutes.route("/all").get(async (req, res) => {
  Codeblock.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Add a new code block
codeblockRoutes.route("/new").post(async (req, res) => {
  const codeblockContent = req.body;
  const newCodeBlock = new Codeblock({
    title: codeblockContent.title,
    code: codeblockContent.code,
    wasEntered: codeblockContent.wasEntered,
    solution: codeblockContent.solution,
  });
  try {
    const savedCodeBlock = await newCodeBlock.save();
    res.status(201).json(savedCodeBlock);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Edit the code of an existing codeblock
/*codeblockRoutes.route("/edit/:id").post(async (req, res) => {
  let id = req.body.id;
  let code = req.body.code;
  try {
    Codeblock.updateOne({
      {title:""},
      {
        $set: {code: ''}
      }
    })
  } catch (err) {
    res.status(500).send(err);
  }
});*/

module.exports = codeblockRoutes;
