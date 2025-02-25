import { useState } from "react";

const data = [
  {
    title: "GKI: A tehetős kétgyerekes családok az szja-elengedés nagy nyertesei",
    text: "A kieső összeg 2025 és 2029 között minden évben növekedni fog. Először a dolgozó háromgyerekes anyák számításaink szerint nagyjából 260 milliárd forintja fog hiányozni, majd 2026-tól ehhez jöhet hozzá a legnagyobb falat, kb. 450 milliárd forint mínusz a 40 év alatti kétgyerekesekkel. 2027-ben újabb 250 milliárd, majd a következő két év során még több mint 300 milliárddal lehet kevesebb a költségvetési bevétel. A kormány a gazdaság felpörgése miatt növekvő bevételekkel reméli finanszírozni a keletkező hiányt. Erről és az intézkedéshez kapcsolódó más dilemmákról itt írtunk bövebben.",
  },
  {
    title: "Darázs Lénárd az ELTE új rektora",
    text: "„Az ELTE Szenátusa 2025. február 24-i ülésén Darázs Lénárdot választotta az egyetem következő rektorává, aki 2025. augusztus 1-től töltheti be a tisztséget. Darázs Lénárd az Állam- és Jogtudományi Kar egyetemi tanára, aki Borhy Lászlót váltja az Eötvös Loránd Tudományegyetem élén” – jelentette be a Facebook-oldalán az ELTE.",
  },
  {
    title: "Új fotó került elő Kurt Cobainről, amin bemutat a kamerának a PeCsában",
    text: "Eddig ismeretlen, nagy valószínűséggel Magyarországon készült fotó került elő Kurt Cobainről, írja a Recorder. A képet Robert Fisher, a zenekar grafikusa töltötte fel a nirvanabucket nevű Instagram-oldalára. A leírásból mindössze annyi derül ki, hogy egy zenekari beálláson történt, illetve, hogy Fisher szerint Krist, azaz Krist Novoselic, a zenekar basszusgitárosa készítette.",
  },

];

const zeroPad = (num, places) => String(num).padStart(places, '0')

function App() {

  const [articels, setarticels] = useState(data);
  const [open,setopen] = useState(-1);
  const activeList = articels.map((item,index) => open === index ? true : false);
  function setActive(num)
  {
    setopen((x) => num);
  }

  return (
    <div className="div-block">
      {articels.map((item, index) => {
        console.log(item,index);
        return (<MyAccordion num={index} title={item.title} text={item.text} isOpen={activeList[index]} setActive={setActive}/>);
      })
      }
    </div >
  );
}

function MyAccordion({ num, title, text, isOpen, setActive }) {
  
  return (
    <div className="accordion">
      <div className="head" onClick={() => isOpen ? setActive(-1) : setActive(num) }>
        <div className="headspaceing">{zeroPad(num+1,2)}</div>
        <div className="headspaceing">{title}</div>
        <div className="endfill">
          <div className="headspaceing plussize">{ isOpen ? "-" : "+"}</div>
        </div>
      </div>
      {isOpen && 
      <div className="textbody">
        <div className="bodytext">{text}</div>
      </div>}
    </div>
  );
}

export default App
