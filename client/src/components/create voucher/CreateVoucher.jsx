import React, { useState } from 'react';
import {create} from '../../services/voucherService'
import {useNavigate} from 'react-router-dom';


export const VoucherForm = () => {
  const [service, setService] = useState('');
  const [description, setDescription] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const voucherData = { service, description, expiryDate };

    try {
      const result = await create(voucherData)
    navigate('/home')
    } catch (error) {
      console.log(error);
    }

    
    
  };

  return (
    <form className = 'voucherForm'onSubmit={handleSubmit}>
      <label className='select'>
        Изберете вид услуга:
        <select value={service} onChange={(e) => setService(e.target.value)}>
          <option value="">Изберете услуга</option>
          <option value="Събития">Събития</option>
          <option value="Сватбен ден">Сватбен ден</option>
          <option value="Фотосесии в студио">Фотосесии в студио</option>
          {/* ... други възможни услуги */}
        </select>
      </label>
      <br />
      <label className='description'>
        Описание на ваучера:
        <textarea className='desVoucher'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </label>
      <br />
      <label className='term'>
        Дата за заснемане:
        <input
          type="text"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Създай ваучер</button>
    </form>
  );
};

export default VoucherForm;