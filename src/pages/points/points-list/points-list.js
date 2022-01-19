import * as classes from './points-list.module.scss';
import { PointsListItem } from '../points-list-item/points-list-item';
import PatchStyles from 'patch-styles';

export const PointsList = ({ points }) => {
  return (
    <PatchStyles classNames={classes}>
      <div className="PointsList">
        {
          points.length ? (
            points.map((point) => (
                <PointsListItem
                  key={point.id}
                  point={point}
                />
              ),
            )
          ) : (
            <span>no <b>points</b> yet</span>
          )
        }
      </div>
    </PatchStyles>
  );
};
