import React from "react";
import { Container, Row, Accordion, Card } from "react-bootstrap";
import { Icon } from "react-icons-kit";
import { arrowDown2 } from "react-icons-kit/icomoon/arrowDown2";

function Faq() {
  const faqs = [
    {
      question: "adadasdadadas",
      answer: "adasdasdada",
      key: "0",
    },
    {
      question: "adadasdadadas",
      answer: "adasdasdada",
      key: "1",
    },
    {
      question: "adadasdadadas",
      answer: "adasdasdada",
      key: "2",
    }
  ];

  return (
    <Container>
      <Row className="my-4">
        <h1>FAQ</h1>
      </Row>
      <Row className="d-flex flex-column">
        <Accordion>
          {faqs.map((faq) => (
            <FaqCard
              key={faq.key}
              question={faq.question}
              answer={faq.answer}
              eventKey={faq.key}
            />
          ))}
        </Accordion>
      </Row>
    </Container>
  );
}

const FaqCard = ({ question, answer, eventKey }) => (
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
      <Icon icon={arrowDown2} className="mr-2" />
      {question}
    </Accordion.Toggle>
    <Accordion.Collapse eventKey={eventKey}>
      <Card.Body>{answer}</Card.Body>
    </Accordion.Collapse>
  </Card>
);

export default Faq;
