import { useEffect, useState } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "./Form";

function Starships() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [starship, setStarship] = useState("");

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/starships/${id}`)
            .then((res) => {
                setStarship(res.data);
            })
            .catch((err) => {
                console.log(err);
                navigate('/error');
            }
            );
    }, [id, navigate]);

    return (
        <>
            <Form />
            <div className="mt-3 ml-5">
                {starship && (<>
                    <div>
                        <h2 className="mb-3">{starship.name}</h2>
                        <p style={{ fontSize: 20 }}>
                            <span style={{ fontWeight: 900 }}>
                                Climate:&nbsp;
                            </span>
                            {
                                starship.climate.charAt(0).toUpperCase() +
                                starship.climate.slice(1)
                            }
                        </p>
                        <p style={{ fontSize: 20 }}>
                            <span style={{ fontWeight: 900 }}>
                                Gravity:&nbsp;
                            </span>
                            {
                                starship.gravity
                            }
                        </p>
                        <p style={{ fontSize: 20 }}>
                            <span style={{ fontWeight: 900 }}>
                                Terrain:&nbsp;
                            </span>
                            {
                                starship.terrain.charAt(0).toUpperCase() +
                                starship.terrain.slice(1)
                            }
                            &nbsp;years
                        </p>
                        <p style={{ fontSize: 20 }}>
                            <span style={{ fontWeight: 900 }}>
                                Population:&nbsp;
                            </span>
                            {
                                starship.population === 'unknown' ?
                                    starship.population.charAt(0).toUpperCase() +
                                    starship.population.slice(1) :
                                    starship.population
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
export default Starships;