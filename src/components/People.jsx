import { useEffect, useState } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "./Form";

function People() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [person, setPerson] = useState("");

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/people/${id}`)
            .then((res) => {
                setPerson(res.data);
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
                {person && (<>
                    <div>
                        <h2 className="mb-3">{person.name}</h2>
                        <p style={{ fontSize: 20 }}><span style={{ fontWeight: 900 }}>Height: </span>{person.height} cm</p>
                        <p style={{ fontSize: 20 }}><span style={{ fontWeight: 900 }}>Mass: </span>{person.mass} kg</p>
                        <p style={{ fontSize: 20 }}>
                            <span style={{ fontWeight: 900 }}>
                                Hair Color:&nbsp;
                            </span>
                            {
                                person.hair_color.charAt(0).toUpperCase() +
                                person.hair_color.slice(1)
                            }
                        </p>
                        <p style={{ fontSize: 20 }}>
                            <span style={{ fontWeight: 900 }}>
                                Skin Color:&nbsp;
                            </span>
                            {
                                person.skin_color.charAt(0).toUpperCase() +
                                person.skin_color.slice(1)
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
export default People;