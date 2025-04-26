import { FC } from "react";

const NotFound: FC = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen -mt-20">
      <h1 className="text-8xl font-light">404</h1>
      <p className="text-xl">Page Not Found</p>
    </main>
  );
};

export default NotFound;