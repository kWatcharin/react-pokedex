import { Outlet } from "react-router-dom"

export default function NotFoundLayout() {
  return (
    <>
      <h1 
        className="text-white bg-cyan-200 
        font-italic"
      >
        NotFoundLayout
      </h1>
      <Outlet />
    </>
  )
}
