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
                                Model:&nbsp;
                            </span>
                            {
                                starship.model
                            }
                        </p>
                        <p style={{ fontSize: 20 }}>
                            <span style={{ fontWeight: 900 }}>
                                Manufacturer:&nbsp;
                            </span>
                            {
                                starship.manufacturer
                            }
                        </p>
                        <p style={{ fontSize: 20 }}>
                            <span style={{ fontWeight: 900 }}>
                                Hyperdrive Rating:&nbsp;
                            </span>
                            {
                                starship.hyperdrive_rating
                            }
                        </p>
                        <p style={{ fontSize: 20 }}>
                            <span style={{ fontWeight: 900 }}>
                                Starship Class:&nbsp;
                            </span>
                            {
                                starship.starship_class.charAt(0).toUpperCase() +
                                starship.starship_class.slice(1)
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