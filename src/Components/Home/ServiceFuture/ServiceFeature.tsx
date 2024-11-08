import React from 'react';

interface ServiceFeatureProps {
    icon: JSX.Element;
    title: string;
    description: string;
}

const ServiceFeature: React.FC<ServiceFeatureProps> = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center text-center w-full p-2 md:w-[48%] lg:w-[24%]">
            <div className="text-red-500 mb-2">{icon}</div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-gray-500">{description}</p>
        </div>
    );
};

export default ServiceFeature;
