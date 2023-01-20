import { useEffect, useState } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "./Form";

function Vehicles() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [vehicle, setVehicle] = useState("");

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/vehicles/${id}`)
            .then((res) => {
                setVehicle(res.data);
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
                {vehicle && (<>
                    <div>
                        <h2 className="mb-3">{vehicle.name}</h2>
                        <p style={{ fontSize: 20 }}>
                            <span style={{ fontWeight: 900 }}>
                                Model:&nbsp;
                            </span>
                            {
                                vehicle.model
                            }
                        </p>
                        <p style={{ fontSize: 20 }}>
                            <span style={{ fontWeight: 900 }}>
                                Manufacturer:&nbsp;
                            </span>
                            {
                                vehicle.manufacturer
                            }
                        </p>
                        <p style={{ fontSize: 20 }}>
                            <span style={{ fontWeight: 900 }}>
                                Max Atmosphere Speed:&nbsp;
                            </span>
                            {
                                vehicle.max_atmosphering_speed
                            }
                        </p>
                        <p style={{ fontSize: 20 }}>
                            <span style={{ fontWeight: 900 }}>
                                Vehicle Class:&nbsp;
                            </span>
                            {
                                vehicle.vehicle_class.charAt(0).toUpperCase() +
                                vehicle.vehicle_class.slice(1)
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
export default Vehicles;