import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const handleClick = (sendTo) =>  {


  fetch("/api/sendgrid", {
    body: JSON.stringify({
      sendTo: sendTo.value
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  }).then(resp => {
    if (resp.status == 200) {
      sendTo.value = "";
      alert("Early access email sent!")
    } else (
      console.log(resp.json())
    )
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