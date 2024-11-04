import './BackgroundChanger.scss';

const BackgroundChanger = ({color,changeBG}:any) => {
  return (
    <div className='container'>
        <button className='btn' onClick={()=>changeBG(color)}>{color}</button>
      
    </div>
  )
}

export default BackgroundChanger
