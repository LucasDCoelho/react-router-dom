import { Link } from "react-router-dom";


export function Error(){


    return(
        <>
            <h1 className="text-3xl">NOT FOUND 404</h1>
            <Link to={"/!"}>Voltar</Link>
        </>
    );
}