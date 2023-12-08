import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import * as voucherService from '../../services/voucherService'





const VoucherDetails = () => {
const {voucherId} = useParams();
const [voucher, setVoucher] = useState({})

useEffect (() => {
  voucherService.getOne(voucherId)
  .then(result => setVoucher(result))
}, [voucherId])
     


    return (
        <div className="voucher-details">
          {voucher && (
            <>
              <h2>{voucher.service}</h2>
              <img src={voucher.imageUrl} alt={voucher.service} />
              <p>{voucher.description}</p>
              {voucher.expiryDate}
            </>
          )}
        </div>
      );
    };
    
    export default VoucherDetails;
