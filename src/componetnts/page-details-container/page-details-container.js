import * as classes from './page-details-container.module.scss';
import PatchStyles from 'patch-styles';

export const PageDetailsContainer = ({ children }) => {
  return (
    <PatchStyles classNames={classes}>
      <div className="PageDetailsContainer">{children}</div>
    </PatchStyles>
  );
};
