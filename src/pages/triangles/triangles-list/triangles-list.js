import PatchStyles from 'patch-styles';
import * as classes from './trinangles-list.modules.scss';
import { TrianglesListItem } from '../triangles-list-item/triangles-list-item';

export const TrianglesList = ({ triangles }) => {
  return (
    <PatchStyles classNames={classes}>
      <div className="TrianglesList">
        {
          triangles.length ? (
            triangles.map((triangle) => {
              return <TrianglesListItem key={triangle.id} triangle={triangle} />;
            })
          ) : (
            <span>no <b>triangles</b> yet</span>
          )
        }
      </div>
    </PatchStyles>
  );
};
