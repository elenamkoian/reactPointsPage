import './points-list.scss';
import { PointsListItem } from '../points-list-item/points-list-item';

export const PointsList = ({ points, onDeletePoint }) => {
  return (
    <div className="PointsList">
      {
        points.length ? (
          points.map((point, index) => (
              <PointsListItem key={point.id} point={point} onDeletePoint={() => onDeletePoint(index)} />
            ),
          )
        ) : (
          <span>No points yet</span>
        )
      }
    </div>
  );
};
