import { CirclesListItem } from './circles-list-item';

export const CirclesList = ({ circles }) => {
  return (
    <div className="CirclesList">
      {
        circles.length ? (
          circles.map((circle, index) => (
              <CirclesListItem circle={circle} index={index} key={index} />
            ),
          )
        ) : (
          <span>No points yet</span>
        )
      }
    </div>
  );
};
