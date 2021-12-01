import { Logo } from './logo/logo';
import { Button } from './button/button';

export const Navbar = ({ pages, active }) =>  {
  return(
      <div className='Navbar'>

        <div className='LogoWithTitle'>
          <Logo />
          <span className='PageTitle'>Figures</span>
        </div>

        <div className='ButtonList'>
          {/*{*/}
          {/*  pages.map((figure, index) => (*/}
          {/*     <button*/}
          {/*       key={index}*/}
          {/*       className={`Button ${index === active ? 'Active' : ''}`}*/}
          {/*     >*/}
          {/*       {figure}*/}
          {/*     </button>*/}
          {/*  ))*/}
          {/*}*/}

          {
            pages.map((figure, index) => (
              <Button
                key={index}
                size='small'
                variant='outlined'
                className={`Button ${index === active ? 'Active' : ''}`}
              >
                {figure}
              </Button>
            ))
          }
        </div>

      </div>
    )
}
