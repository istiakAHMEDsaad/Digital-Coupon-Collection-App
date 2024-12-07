import { Spinner } from "flowbite-react";

const LoadingForUser = () => {
    return (
        <div className="flex min-h-screen w-full justify-center items-center">
            <Spinner color="success" aria-label="Success spinner example" size="xl"></Spinner>
        </div>
    );
};

export default LoadingForUser;