import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [sayi1, setsayi1] = useState(0)
  const [sayi2, setsayi2] = useState(0)
  const [hesapla, setHesapla] = useState(0)
  const [islem, setIslem] = useState(0)

  useEffect(() => {
    setHesapla(sonuc(islem))
  }, [islem]);

  useEffect(() => {
    setHesapla(sonuc(islem))
  }, [sayi1]);

  useEffect(() => {
    setHesapla(sonuc(islem))
  }, [sayi2]);

  const sonuc = (islem) => {
    if (islem === 'topla') {
      return Number(sayi1) + Number(sayi2)
    } else if (islem === 'cikar') {
      return Number(sayi1) - Number(sayi2)
    } else if (islem === 'carp') {
      return Number(sayi1) * Number(sayi2)
    } else if (islem === 'bol') {
      return Number(sayi1) / Number(sayi2)
    } else if (islem === '') {
      return 'Bir işlem Seçiniz'
    }
  }

  /******************************************************************************************************** */






  return (


    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>

      -----------------------------------------------------------------------------------------
          <h1>Hesap Makinesi</h1>
          <input onChange={(e)=>setsayi1(e.target.value)}/>
          <select onChange={(islem)=>setIslem(islem.target.value)} >
            <option value="">İşlem Seç</option>
            <option value="topla">Topla</option>
            <option value="cikar">Çıkar</option>
            <option value="carp">Çarp</option>
            <option value="bol">Böl</option>
          </select>
          <input onChange={(e)=>setsayi2(e.target.value)}/>

          <button onClick={()=>{setHesapla(sonuc(islem))}}>Hesapla</button>

           <span>Sonuç: {hesapla} </span> ----------------------------------------------------------------

      {/* <div style={{ width: "50%" }}>
        <div id='baslik1' style={{ width: "100%", backgroundColor: "#c6c4c7" }}>

          <button onClick={()=>{seticer1(!icer1); setarrow1(!arrow1)}} style={{ width: "100%", display: "flex", justifyContent:"space-between",alignItems:"center"}}><h2 style={{ float: "left" }}>Başlık1</h2> 
          <img style={{ width: "5%",transform: arrow1 ? "rotate(0deg)":"rotate(270deg)"}} src='https://cdn0.iconfinder.com/data/icons/leading-international-corporate-website-app-collec/16/Expand_menu-512.png'></img>
          </button>

          <div id='icerik1' style={{ width: "100%", backgroundColor: "white", display:icer1 ? "flex":"none" }}><span>blasadasdf dsfasdfasbalbdslbdslbaasdfdasfasdfasdflsa kjahfjklsaşafadskfjkhasjfksalfşladskjfhdjkdlkjahsdasdfjfkalsfjasdf</span> </div>
        </div>
        <span>{icer1}</span>


        <div id='baslik2' style={{ width: "100%", backgroundColor: "#c6c4c7" }}>
          <button onClick={()=>{seticer2(!icer2);setarrow2(!arrow2)}}  style={{ width: "100%", display: "flex", justifyContent:"space-between",alignItems:"center"}}><h2 style={{ float: "left" }}>Başlık1</h2> 
          <img style={{ width: "5%",transform:arrow2 ? "rotate(0deg)":"rotate(270deg)"}} src='https://cdn0.iconfinder.com/data/icons/leading-international-corporate-website-app-collec/16/Expand_menu-512.png'></img>
          </button>
          <div id='icerik2' style={{ width: "100%", backgroundColor: "white", display:icer2 ? "flex":"none" }}><span>blasadasdf dsfasdfasbalbdslbdslbaasdfdasfasdfasdflsa kjahfjklsaşafadskfjkhasjfksalfşladskjfhdjkdlkjahsdasdfjfkalsfjasdf</span> </div>
        </div>



        <div id='baslik3' style={{ width: "100%", backgroundColor: "#c6c4c7" }}>
        <button onClick={()=>{seticer3(!icer3);setarrow3(!arrow3)}}  style={{ width: "100%", display: "flex", justifyContent:"space-between",alignItems:"center"}}><h2 style={{ float: "left" }}>Başlık1</h2> 
          <img style={{ width: "5%",transform: arrow3 ? "rotate(0deg)":"rotate(270deg)"}} src='https://cdn0.iconfinder.com/data/icons/leading-international-corporate-website-app-collec/16/Expand_menu-512.png'></img>
          </button>
          <div id='icerik3' style={{ width: "100%", backgroundColor: "white", display:icer3 ? "flex":"none" }}><span>blasadasdf dsfasdfasbalbdslbdslbaasdfdasfasdfasdflsa kjahfjklsaşafadskfjkhasjfksalfşladskjfhdjkdlkjahsdasdfjfkalsfjasdf</span> </div>
        </div>

      </div> */}

    </div>

  );
}

export default App;
