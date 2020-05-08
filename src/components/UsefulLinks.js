import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

class UsefulLinks extends Component {
  render() {
    return (
      <Container>
        <Row className="d-flex flex-column">
          <h1 className="text-uppercase my-2">Useful Links</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> At
            facere illum quis natus fugiat libero, <br /> ut porro aliquid unde
            atque iusto ducimus
          </p>
        </Row>
        <Row className="d-flex flex-column" id="sites">
          <h3 className="text-uppercase my-2">Useful Sites</h3>
          <ul className="list-unstyled">
            <li>
              <a
                href="https://www.psychologynow.gr/nea-psyxologias/epikairotita/4301-grammes-symvouleftikis-ypostiriksis-kane-to-proto-vima-gia-na-vreis-voitheia.html"
                target="_blank"
              >
                <h6>
                  Τηλεφωνικές γραμμές συμβουλευτικής υποστήριξης: κάνε το πρώτο
                  βήμα για να βρεις βοήθεια
                </h6>
              </a>
              <p>Lorem ipsum dolor sit</p>
            </li>
            <li>
              <a
                href="https://enallaktikidrasi.com/2020/03/koronoios-tilefono-psixologiki-ipostiriksi/"
                target="_blank"
              >
                <h6>
                  Κορονοϊός: Τηλεφωνική γραμμή ψυχολογικής υποστήριξης για όσους
                  τη χρειάζονται
                </h6>
              </a>
              <p>Lorem ipsum dolor sit</p>
            </li>
            <li>
              <a href="http://kesypsy.web.auth.gr/" target="_blank">
                <h6>
                  Κέντρο Συμβουλευτικής και Ψυχολογικής Υποστήριξης Α.Π.Θ.
                </h6>
              </a>
              <p>Lorem ipsum dolor sit</p>
            </li>
          </ul>
        </Row>
        <Row className="d-flex flex-column" id="numbers">
          <h3 className="text-uppercase my-2">Useful Telephone Numbers</h3>
          <ul className="list-unstyled">
            <li>
              <h3>116111</h3>
              <p>Lorem ipsum dolor sit</p>
            </li>
            <li>
              <h3>1528</h3>
              <p>Lorem ipsum dolor sit</p>
            </li>
            <li>
              <h3>1037</h3>
              <p>Lorem ipsum dolor sit</p>
            </li>
          </ul>
        </Row>
      </Container>
    );
  }
}

export default UsefulLinks;
