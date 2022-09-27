import logo from './logo.svg';
import './App.css';

import  QRCode from 'qrcode';
import { useEffect, useState } from 'react';

function App(props) {

  const [src, setSrc] = useState('');

  useEffect(() => {
    QRCode.toDataURL(props.text).then((data) => {
      setSrc(data);
    })
  }, [])

  return (
    <>
      <div>
        <img src={src} alt="" />
      </div>
    </>
  );
}

export default App;
