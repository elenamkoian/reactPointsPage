import './point-list-item.scss';

export const PointListItem = ({ point, index }) => {
  return (
    <div className="PointListItem"
         key={index}
    >
      <div className="Avatar">{point.name}</div>
      <span>Coordinate (x: {point.x}, y: {point.y})</span>
    </div>
  );
};
