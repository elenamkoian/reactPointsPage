import * as classes from './figures-canvas.module.scss';
import PatchStyles from 'patch-styles';

export const FiguresCanvas = () => {
  return (
    <PatchStyles classNames={classes}>
      <div className="FiguresCanvas">
        {/*<canvas />*/}
      </div>
    </PatchStyles>
  );
};
