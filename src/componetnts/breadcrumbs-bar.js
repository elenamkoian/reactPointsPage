import { Button } from './button/button';

export const BreadcrumbsBar = ({ pages, active}) => {
  return (
    <div  className='Breadcrumbs'>
      {
        pages.map((figure, index) => (
          active === index ? <Button size='small'> {figure}</Button> : ''
        ))
      }

      <Button
        size='large'
        variant='contained'
      >
        Create
      </Button>

    </div>
  )
}
