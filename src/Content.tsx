import { useAppContext } from './AppContext';

export function Content() {
  const { location } = useAppContext();

  return <div> {location} </div>;
  /*   if (permissions === undefined) {
    return null;
  } */

  /* return permissions.includes('admin') ? (
    <p className="mt-4 text-l text-center">Some important stuff that only an admin can do</p>
  ) : (
    <p className="mt-4 text-l text-center">Insufficient permissions</p>
  ); */
}
