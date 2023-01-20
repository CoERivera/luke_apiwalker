import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Form() {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        resource: "people",
        id: 1,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { resource, id } = formState;
        navigate(`/${resource}/${id}`)
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    return (
        <div className="card">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-center">
                        <Link className="my-auto mr-5" to="/">
                            Home
                        </Link>
                        <label
                            htmlFor="resource"
                            className="text-nowrap my-auto mr-3"
                        >
                            Search for:
                        </label>
                        <select
                            className="form-select"
                            name="resource"
                            id="resource"
                            value={formState.resource}
                            onChange={handleChange}
                        >
                            <option value="films">Films</option>
                            <option value="people">People</option>
                            <option value="planets">Planets</option>
                            <option value="species">Species</option>
                            <option value="starships">Starships</option>
                            <option value="vehicles">Vehicles</option>
                        </select>
                        <label
                            htmlFor="id"
                            className="my-auto ml-3"
                        >
                            ID:
                        </label>
                        <input
                            type="number"
                            name="id"
                            id="id"
                            className="form-control my-auto mx-3 w-50"
                            value={formState.id}
                            onChange={handleChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Form;