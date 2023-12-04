import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Voucher = () => {
  return (
    <Card style={{ width: '30rem', height:'40rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Ваучер</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Детайли</Button>
      </Card.Body>
    </Card>
  );
}

export default Voucher;