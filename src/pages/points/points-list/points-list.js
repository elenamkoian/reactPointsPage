import './points-list.scss';
import { PointsListItem } from '../points-list-item/points-list-item';

export const PointsList = ({ points }) => {
  return (
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
          <span>No points yet</span>
        )
      }
    </div>
  );
};
