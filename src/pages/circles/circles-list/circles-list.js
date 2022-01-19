import { CirclesListItem } from '../circles-list-item/circles-list-item';
import * as classes from './circles-list.module.scss';
import PatchStyles from 'patch-styles';

export const CirclesList = ({ circles }) => {
  return (
    <PatchStyles classNames={classes}>
      <div className="CirclesList">
        {
          circles.length ? (
            circles.map((circle) => (
                <CirclesListItem
                  circle={circle}
                  key={circle.id}
                />
              ),
            )
          ) : (
            <span>no <b>circles</b> yet</span>
          )
        }
      </div>
    </PatchStyles>
  );
};


