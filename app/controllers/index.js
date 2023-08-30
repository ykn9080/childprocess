const { exec } = require("child_process");
const childprocess = (script, res) => {
  exec(script, (error, stdout, stderr) => {
    if (error) {
      console.error(`error: ${error.message}`);
      //return;
    }

    if (stderr) {
      console.error(`stderr: ${stderr}`);
      //return;
    }
    //console.log(`stdout:\n${stdout}`);
    res.status(200).send({
      status: 200,
      stderr: stderr,
      result: stdout,
    });
  });
};

exports.getQuery = async (req, res) => {
  console.log(req.body);
  if (!req.body.script) return res.status(400).send("Script is required");
  childprocess(req.body.script, res);
};
