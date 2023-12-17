import React from 'react';
import { useForm } from '../../hooks/useForm';


export const VoucherForm = ({
  onCreateVoucherSubmit,
}) => {
  const {values,changeHandler, onSubmit} = useForm ({
   service:'',
   description:'',
   expiryDate:'',

}, onCreateVoucherSubmit);
  
  return (
    <form className = 'voucherForm' method = 'post' onSubmit={onSubmit}>
      <label className='select'>
        Изберете вид услуга:
        <select value={values.service} name = 'service' onChange={changeHandler}>
          <option value="">Изберете услуга</option>
          <option value="Събития">Събития</option>
          <option value="Сватбен ден">Сватбен ден</option>
          <option value="Фотосесии в студио">Фотосесии в студио</option>
          {/* ... други възможни услуги */}
        </select>
      </label>
      <br />
      <label className='description' >
        Описание на ваучера:
        <textarea className='desVoucher'
          name = 'description'
          value={values.description}
          onChange={changeHandler}
        ></textarea>
      </label>
      <br />
      <label className='term' >
        Дата за заснемане:
        <input
          type="text"
          name = 'expiryDate'
          value={values.expiryDate}
          onChange={changeHandler}
        />
      </label>
      <br />
      <button type="submit">Създай ваучер</button>
    </form>
  );
};

export default VoucherForm;