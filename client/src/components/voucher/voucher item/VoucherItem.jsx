import { Link } from 'react-router-dom';
import imageUrl from '../../../assets/images/voucher.png'

export default function VoucherItem({
  
    _id,
    service,
}) {
  //const imageUrl = require('../../../assets/images/voucher.jpg')
  
  return (
<div style={{ width: '50rem', height: '30rem', border: '5px solid #ccc', padding: '20px', margin: '20px' }}>
      <img src={imageUrl} alt="Ваучер" style={{ maxWidth: '105%', maxHeight: '60%', marginBottom: '50px' }} />
      <h3 style={{ color: 'white', fontSize: '30px' }}>Ваучер</h3>
      <p style={{ color: 'white', fontSize: '25px' }}>Резервиран ваучер от тип {service}</p>
      <Link to={`/vouchers/${_id}`} className="details-button" style={{ textDecoration: 'none', backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '4px' }}>
        Детайли
      </Link>
    </div>


  );

}