import { CirclesListItem } from '../circles-list-item/circles-list-item';

export const CirclesList = ({ circles }) => {
  return (
    <div className="CirclesList">
      {
        circles.length ? (
          circles.map((circle) => (
              <CirclesListItem
                circle={circle}
                key={circle.id} />
            ),
          )
        ) : (
          <span>No circles yet</span>
        )
      }
    </div>
  );
};


