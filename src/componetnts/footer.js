import { Button } from './button/button';

export const Footer = () => {
  return (
    <div className='Footer'>

      <div className='FooterInputList'>
        <input type="text" className='Input'/>
        <input type="text" className='Input'/>
      </div>

      <div className='FooterBtnList'>
        <Button
          variant='text'
        >
          Cancel
        </Button>

        <Button
          size='large'
          variant='outlined'
        >
          Save
        </Button>
      </div>

    </div>
  )
}
