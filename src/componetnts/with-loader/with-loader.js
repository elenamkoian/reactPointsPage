import { CircularProgress } from '@mui/material';

export const WithLoader = ({ isLoading, children, className }) => {
  return (
    isLoading ? <CircularProgress size={24} className={className}/> : <>{children}</>
  )
}
