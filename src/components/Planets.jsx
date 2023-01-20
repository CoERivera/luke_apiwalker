import { useEffect, useState } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "./Form";

function Planets() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [planet, setPlanet] = useState("");

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/planets/${id}`)
            .then((res) => {
                setPlanet(res.data);
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
                {planet && (<>
                    <div>
                        <h2 className="mb-3">{planet.name}</h2>
                        <p style={{ fontSize: 20 }}>
                            <span style={{ fontWeight: 900 }}>
                                Climate:&nbsp;
                            </span>
                            {
                                planet.climate.charAt(0).toUpperCase() +
                                planet.climate.slice(1)
                            }
                        </p>
                        <p style={{ fontSize: 20 }}>
                            <span style={{ fontWeight: 900 }}>
                                Gravity:&nbsp;
                            </span>
                            {
                                planet.gravity
                            }
                        </p>
                        <p style={{ fontSize: 20 }}>
                            <span style={{ fontWeight: 900 }}>
                                Terrain:&nbsp;
                            </span>
                            {
                                planet.terrain.charAt(0).toUpperCase() +
                                planet.terrain.slice(1)
                            }
                            &nbsp;years
                        </p>
                        <p style={{ fontSize: 20 }}>
                            <span style={{ fontWeight: 900 }}>
                                Population:&nbsp;
                            </span>
                            {
                                planet.population === 'unknown'?
                                planet.population.charAt(0).toUpperCase() +
                                planet.population.slice(1):
                                planet.population
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
export default Planets;