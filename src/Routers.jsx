import { 
  Route, createBrowserRouter, RouterProvider, createRoutesFromElements 
} from 'react-router-dom';


export default function Routers() {
  const routers = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route 
          index 
          element={
            <h1 className="text-3xl font-bold underline bg-cyan-500">
              Hello Pokemon
            </h1>
          }
        />
      </ Route>
    )
  )

  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}
