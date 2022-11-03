import React from "react";





function App() {
  const [choose, setChoose] = React.useState('course');

  

  return (
    <div className="container">
      <div className='pay'>
        <h1>Оплата услуг</h1>
        <table className="myTable">
          <tbody>
            <tr>
              <td><b>Выбор:</b></td>
              <td>
                <div className="variants-tarif">
                  <button style={choose === 'course' ? {border: '1px solid grey'} : {}}  onClick={() => setChoose('course')}>КУРС</button>
                  <button style={choose === 'bundle' ? {border: '1px solid grey'} : {}}  onClick={() => setChoose('bundle')}>СВЯЗКА</button>
                  
                </div>
              </td>
            </tr>
            <tr>
              <td><b>Стоимость:</b></td>
              {choose === 'course' ?
              <div className="price">150 USDT</div> : <div className="price">50 USDT</div>}

              
            </tr>
            <tr>
              <td><b>TRC-кошелек для оплаты:</b></td>
              <td>
                <div>TFeD7uRbcrdCQBi1jzkXpAExdrZGedLa3U</div>
                <div><img width={250} height={250} src='/img/qr-trc.png' alt='QR' /></div>
                  </td>
                  </tr>
          </tbody>
        </table>
        <div className="notice">
          <h2>Инструкция</h2>
          <p>1. Сделайте перевод <b>USDT</b> на <b>TRC-кошелек</b>: TFeD7uRbcrdCQBi1jzkXpAExdrZGedLa3U</p>
          <p>2. После успешного перевода, необходимо отправить скриншот оплаты на <b>ТЕЛЕГРАМ</b></p>        </div>
      </div>
      
    </div>
  );
}

export default App;
