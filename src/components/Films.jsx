import { useEffect, useState } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "./Form";

function Films() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [film, setFilm] = useState("");

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/films/${id}`)
            .then((res) => {
                setFilm(res.data);
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
                {film && (<>
                    <div>
                        <h2 className="mb-3">{film.title}</h2>
                        <p style={{ fontSize: 20 }}><span style={{ fontWeight: 900 }}>Episode: </span>{film.episode_id}</p>
                        <p style={{ fontSize: 20 }}><span style={{ fontWeight: 900 }}>Director: </span>{film.director}</p>
                        <p style={{ fontSize: 20 }}><span style={{ fontWeight: 900 }}>Released: </span>{film.release_date}</p>
                        <p style={{ fontSize: 20 }}><span style={{ fontWeight: 900 }}>Intro: </span>{film.opening_crawl}</p>
                    </div>
                </>
                )}
            </div>
            <Outlet />
        </>
    );
}
export default Films;