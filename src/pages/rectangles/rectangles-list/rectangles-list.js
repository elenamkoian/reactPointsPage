import * as classes from './rectangles-list.modul.scss';
import PatchStyles from 'patch-styles';
import { RectanglesListItem } from '../rectangles-litst-item/rectangles-list-item';

export const RectanglesList = ({ rectangles }) => {
  return (
    <PatchStyles classNames={classes}>
      <div className="RectanglesList">
        {
          rectangles.length ? (
            rectangles.map((rectangle) => (
                <RectanglesListItem
                  key={rectangle.id}
                  rectangle={rectangle}
                />
              ),
            )
          ) : (
            <span>no <b>rectangles</b> yet</span>
          )
        }
      </div>
    </PatchStyles>
  );
};
