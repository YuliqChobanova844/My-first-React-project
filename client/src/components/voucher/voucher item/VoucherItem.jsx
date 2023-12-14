import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export default function VoucherItem({
    _id,
    service,
    description, 
    expiryDate, 
    
    
}) {
  return (

    <Card style={{ width: '30rem', height:'40rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Ваучер</Card.Title>
      <Card.Text>
        Резервиран ваучер от тип {service}
      </Card.Text>
      <Link to={`/vouchers/${_id}`} className="details-button">Детайли</Link>
    </Card.Body>
  </Card>


  );

}