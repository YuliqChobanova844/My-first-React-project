
import { useEffect } from 'react';
import { useState } from 'react';
import {voucherServicefactory} from '../../services/voucherService'
import { useService } from '../../hooks/useService';
import VoucherItem from './voucher item/VoucherItem';

const Voucher = ({
  vouchers,
}) => {
  
   
  
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