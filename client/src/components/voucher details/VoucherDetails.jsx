import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import {voucherServicefactory} from '../../services/voucherService'
import imageUrl from '../../assets/images/voucher.png'
import { useService } from "../../hooks/useService";




const VoucherDetails = (
 
   
  
) => {
const {voucherId} = useParams();
const [voucher, setVoucher] = useState({})
const voucherService = useService(voucherServicefactory)

useEffect (() => {
  voucherService.getOne(voucherId)
  .then( result => {
    setVoucher(result)
  })
  .then(error =>console.error('Error fetching voucher:',error));
}, [voucherId]);

     


    return (
        <div className="voucher-details">
          
            
              <h2>{voucher.service}</h2>
              <img src={imageUrl} alt={voucher.service} />
              <p>{voucher.description}</p>
              {voucher.expiryDate}
            
        
        </div>
      );
    };
    
    export default VoucherDetails;
