import './point-list.scss';
import { PointListItem } from '../point-list-item/point-list-item';

export const PointList = ({ points }) => {
  return (
    <div className="PointList">
      {
        points.length ? (
          points.map((point, index) => (
              <PointListItem point={point} index={index} />
            ),
          )
        ) : (
          <span>No points yet</span>
        )
      }
    </div>
  );
};
