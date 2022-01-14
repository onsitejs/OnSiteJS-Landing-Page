import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const handleClick = (sendTo) =>  {
  const API_KEY = process.env.SENDGRID_API_KEY
  const send_data = {
      "from":{
        "email":"hello@onsitejs.org",
        "name":"OnSiteJS"
      },
      "personalizations":[
        {
            "to":[
              {
                  "email":sendTo.value
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
  }
  fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
          'authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(send_data)
  }).then(resp => {
    sendTo.value = "";
    alert("Early access email sent!")
  });
}


const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              
                
              <h1 className="mb-4 font-weight-normal line-height-1_4">Finally! <span className="text-primary font-weight-medium">Privacy-conscious</span> website analytics that you&apos;ll actually like.</h1>
              <p className="text-muted mb-4 pb-2"><b>Ditch Google for privacy-preserving website analytics with superpowers:</b>
              <ul className="list-group">
                <li className="list-unstyled">&#9889;&emsp;&ensp; Intelligent analytics payloads that adapt on the edge</li>
                <li className="list-unstyled">&#129520;&ensp; Custom payloads based on location, network, or browser</li>
                <li className="list-unstyled">&#10084;&emsp;&ensp; Free and open source software with hosted option</li>
              </ul>
              </p>
              
              <div className="input-group mb-3">
                <input id="sendTo" type="text" className="form-control" placeholder="e-mail" aria-label="e-mail" aria-describedby="email-input" />
                <a href="#" className="btn btn-primary" onClick={() => handleClick(sendTo)}>
                Join the waitlist <span className="ml-2 right-icon">&#8594;</span>
              </a>
              </div>
              
            </div>
          </Col>
          <Col lg={6}>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;