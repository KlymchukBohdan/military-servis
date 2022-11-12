import './Main.css';
import uaflag from "../img/uaflag.png"
import embleme from "../img/army.png"

function Main() {
  return (
    <div className="Main">
  
  <main>
<div className='tryzub-div'><img className='tryzub' src={require("../img/tryzub.jpg")}/></div>
<div className='info-div'>
    <div className='text-with-img'>
        <img className='duty-img' src={require("../img/duty.jpg")}></img>
    <div>
    <h2 className='header-info'>Служба військ:</h2>
    <p className='text-info'>Це складова частина повсякденної діяльності військ, яка спрямована на забезпечення необхідних умов життя, підтримання статутного порядку і військової дисципліни у військових частинах та гарнізонах, а також на підтримання належної бойової готовності військових частин та підрозділів. Служба військ включає:</p>
    <ul>
    <li className='text-li'> Внутрішню службу</li>
    <li className='text-li'>Гарнізонну сужбу</li>
    <li className='text-li'>Вартову службу</li>
    </ul>
    </div>
  
    </div>
</div>

<div className='tryzub-div'><img className='tryzub' src={require("../img/tryzub.jpg")}/></div>
<div className='info-div'>
    <div className='text-with-img'>
        <img className='duty-img' src={require("../img/upravlinia.jpg")}></img>
    <div>
    <h2 className='header-info'>Основні завдання управління:</h2>
    <ul>
    <li className='text-li'>Підтримання мобілізаційної і бойової готовності військ</li>
    <li className='text-li'>Збір, вивчення і аналіз даних на обстановку</li>
    <li className='text-li'>Прийняття рішення</li>
    <li className='text-li'>Доведення завдань до підлеглих</li>
    <li className='text-li'>Планування бою</li>
    <li className='text-li'>Організація безперервної взаємодії</li>
    <li className='text-li'>Проведення заходів з виховної роботи і всебічного забезпечення бойових дій</li>
    <li className='text-li'>Підготовка підрозділів до бойових дій і керівництво ними</li>
    <li className='text-li'>Організація контролю і допомоги підлеглим</li>
    </ul>
    </div>
  
    </div>
</div>
  </main>
    </div>
  );
}

export default Main;