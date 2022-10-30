import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Banner from "../SingleService/Banner/Banner";
const AddService = () => {
    const productDetail = useLoaderData();
    const { user } = useContext(AuthContext);

    let facility = [
        {
            name: "Instant Car Services",
            details: "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
        },
        {
            name: "24/7 Quality Service",
            details: "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
        },
        {
            name: "Easy Customer Service",
            details: "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
        },
        {
            name: "Quality Cost Service",
            details: "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
        }
    ]

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const service_id = form.service_id.value;
        const title = form.title.value;
        const img = form.image.value;
        const price = form.price.value;
        const description = form.description.value;
        const serviceData = {
            service_id,
            title,
            img,
            price: parseInt(price),
            description,
            facility
        };
        console.log(serviceData);
        fetch(`http://localhost:5000/service`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(serviceData),
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Service added successfully");
                form.reset()
            });
    }
    return (
        <section className="w-5/6 mx-auto">
            <Banner title={"Add Service"}></Banner>
            <div className="my-6 bg-[#F3F3F3] w-5/6 mx-auto">
                <form className="p-4 m-3" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4 justify-items-center">
                        {/* DaisyUI input field with level. DaisyUI doesn't provide any form layout */}
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-bold">Service Id</span>
                            </label>
                            <input
                                type="text"
                                name="service_id"
                                placeholder="Ex: 01"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-bold">Title</span>
                            </label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Type here"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-bold">Image</span>
                            </label>
                            <input
                                type="text"
                                name="image"
                                placeholder="Image link"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-bold">Price</span>
                            </label>
                            <input
                                type="number"
                                name="price"
                                placeholder="Ex: 200.00"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control col-span-full w-full mb-6">
                            <label className="label">
                                <span className="label-text font-bold">Description</span>
                            </label>
                            <textarea
                                rows="5"
                                name="description"
                                placeholder="Type here"
                                className=" input-bordered w-full "
                            />
                        </div>
                        <div className="form-control col-span-full w-full mb-6">
                            <input
                                type="submit"
                                value={"Add Service"}
                                className="btn bg-[#FF3811] font-bold w-full"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};


export default AddService;
