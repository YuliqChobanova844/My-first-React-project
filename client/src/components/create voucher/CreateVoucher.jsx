import React, { useState } from 'react';


const VoucherForm = () => {
  const [service, setService] = useState('');
  const [description, setDescription] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тук може да се напише логика за изпращане на данните до сървъра
    const voucherData = { service, description, expiryDate };
    console.log('Изпратена заявка:', voucherData);
    // Можете да използвате fetch или друг метод за изпращане на данните до сървъра
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
        Изберете срок на ваучера:
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