import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useEffect } from 'react';
import { useState } from 'react';
import * as voucherService from '../../services/voucherService'
import VoucherItem from './voucher item/VoucherItem';

const Voucher = () => {
  const [vouchers, setVouchers] = useState([])

   useEffect(() => {
    voucherService.getAll()
          .then(result => setVouchers(result));
   }, [])




  return (
    <div>
     {vouchers.map(voucher => (
      <VoucherItem key={voucher._id} {...voucher} />
     ))}

     {vouchers.length === 0 && (
      <h3 className='no-reserved-vouchers'>Нямате резервирани ваучери</h3>
     )}
    </div>
  );
}

export default Voucher;