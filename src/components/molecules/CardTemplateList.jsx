import * as icon from '../../assets/icons/icons';
import Button from '../atoms/Button';
 function CardTemplateList({
  heading1,
  heading2,
  rightText,
  header,
  text,
  btn,
  img,
  cards 
})  {

  return(
   <div>
   {<div>
    <h2>{heading1} <span className="text-primary">{heading2}</span></h2>
    <div>{rightText} <icon.FaArrowRight /> </div>
    </div>}

    {<div  className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {cards.map((c, id)=>(
        <div key={id}>
     <img src={c.img} alt="error" />
      <h2>{c.header}</h2>
      <p>{c.text}</p>
      <Button variant='primary'>{c.btn}</Button>
        </div>
      ))}
 
    </div>}
   </div>
  )
}

export default CardTemplateList;