import React, { useEffect, useState } from "react";
import { getServices, deleteService } from "../services/serviceService";

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices().then((response) => setServices(response.data));
  }, []);

  const handleDelete = (id) => {
    deleteService(id).then(() => setServices(services.filter((s) => s._id !== id)));
  };

  return (
    <div>
      <h2>Liste des Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service._id}>
            {service.nomService} - {service.prix}€
            <button onClick={() => handleDelete(service._id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
