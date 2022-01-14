import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
        "from":{
          "email":"hello@onsitejs.org",
          "name":"OnSiteJS"
        },
        "personalizations":[
          {
              "to":[
                {
                    "email":req.sendTo.value
                }
              ],
              "dynamic_template_data":{
                "Sender_Name":"OnSiteJS, by Backchannel Inc.",
                "Sender_Address":"228 Park Avenue",
                "Sender_City":"New York",
                "Sender_State":"New York",
                "Sender_Zip":"10003"
            }
          }
        ],
        "template_id":"d-ab409d53397b43299116632c2939641b"
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;