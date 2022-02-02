import PatchStyles from 'patch-styles';
import { TrianglesListItem } from '../triangles-list-item/triangles-list-item';
import { makeStyles } from '@mui/styles';
import { useFetchTrianglesQuery } from '../../../store/services/triangles.service';

const useStyles = makeStyles((theme) => ({
    TrianglesList: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
      minWidth: '30%',
      color: theme.palette.text.secondary,
    },
  }
));

export const TrianglesList = () => {
  const classes = useStyles();
  const { data: triangles } = useFetchTrianglesQuery(null, {
    selectFromResult: ({ data, ...otherInfo }) => ({
      data: data && Object.values(data),
      ...otherInfo,
    }),
  });


  return (
    <PatchStyles classNames={classes}>
      <div className="TrianglesList">
        {
          triangles?.length ? (
            triangles?.map((triangle) => {
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
