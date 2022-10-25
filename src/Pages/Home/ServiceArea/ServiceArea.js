import React, { useEffect, useState } from 'react';
import SingleService from './SingleService/SingleService';

const ServiceArea = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("Data/allServices.json")
            .then(res => res.json())
            .then(data => setServices(data.services))
    }, [])

    return (
        <div className="section-2 mt-20 w-5/6 mx-auto">
            <div className="mx-7 ml-3 px-5 mt-7 lg:mt-0 text-center">
                <p className="text-orange-700 font-bold">Service</p>
                <h2 className="md:text-3xl md:font-bold mt-3">Our Service Area</h2><br />
                <p className="w-3/4 mx-auto mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sunt cupiditate repellat natus vero nemo quos, voluptate, dolorem molestias voluptas consequuntur fuga.</p><br />
            </div>
            <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    services?.map(service => <SingleService
                        key={service.service_id}
                        service={service}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default ServiceArea;