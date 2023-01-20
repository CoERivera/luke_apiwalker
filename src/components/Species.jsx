import { useEffect, useState } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "./Form";

function Species() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [oneSpecies, setOneSpecies] = useState("");

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/species/${id}`)
            .then((res) => {
                setOneSpecies(res.data);
            })
            .catch((err) => {
                console.log(err);
                navigate('/error');
            }
            );
        // eslint-disable-next-line
    }, [id]);

    return (
        <>
            <Form />
            <div className="mt-3 ml-5">
                {oneSpecies && (<>
                    <div>
                        <h2 className="mb-3">{oneSpecies.name}</h2>
                        <p style={{ fontSize: 20 }}>
                            <span style={{ fontWeight: 900 }}>
                                Classification:&nbsp;
                            </span>
                            {
                                oneSpecies.classification.charAt(0).toUpperCase() +
                                oneSpecies.classification.slice(1)
                            }
                        </p>
                        <p style={{ fontSize: 20 }}>
                            <span style={{ fontWeight: 900 }}>
                                Designation:&nbsp;
                            </span>
                            {
                                oneSpecies.designation.charAt(0).toUpperCase() +
                                oneSpecies.designation.slice(1)
                            }
                        </p>
                        <p style={{ fontSize: 20 }}>
                            <span style={{ fontWeight: 900 }}>
                                Avg Lifespan:&nbsp;
                            </span>
                            {
                                oneSpecies.average_lifespan
                            }
                            &nbsp;years
                        </p>
                        <p style={{ fontSize: 20 }}>
                            <span style={{ fontWeight: 900 }}>
                                Language:&nbsp;
                            </span>
                            {
                                oneSpecies.language
                            }
                        </p>
                    </div>
                </>
                )}
            </div>
            <Outlet />
        </>
    );
}
export default Species;