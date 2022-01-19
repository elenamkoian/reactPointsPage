import * as classes from './points-list-item.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { pointsSlice } from '../../../store/slices/points.slice';
import PatchStyles from 'patch-styles';

export const PointsListItem = ({ point }) => {
  const dispatch = useDispatch();

  const handleDeletePoint = () => {
    dispatch(pointsSlice.actions.deletePoint(point.id));
  };

  return (
    <PatchStyles classNames={classes}>
      <div className="PointsListItem">
      <span className="DeletePoint"
            onClick={() => handleDeletePoint()}>
        <FontAwesomeIcon icon={faTimes} />
      </span>

        <div className="Avatar">{point.name}</div>
        <span>Coordinate (x: {point.x}, y: {point.y})</span>
      </div>
    </PatchStyles>
  );
};
