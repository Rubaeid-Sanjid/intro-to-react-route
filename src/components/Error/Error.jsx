import { useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError();

    return (
        <div className="flex flex-col items-center justify-center p-6 text-5xl">
            <h1 className="mb-5 font-bold">Oh, Shit.!!!!</h1>
            <h2>{error.status}</h2>
            <h2>{error.statusText}</h2>
        </div>
    );
};

export default Error;