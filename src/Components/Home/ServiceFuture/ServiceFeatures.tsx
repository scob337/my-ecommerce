import React from 'react';
import { FaShippingFast, FaHeadset, FaShieldAlt, FaMoneyBillWave } from 'react-icons/fa';
import ServiceFeature from './ServiceFeature';

const ServiceFeatures: React.FC = () => {
    return (
        <article className="flex justify-around py-6 bg-white flex-wrap gap-1">
            <ServiceFeature icon={<FaShippingFast size={30} />} title="Free Shipping" description="For all orders over $99" />
            <ServiceFeature icon={<FaMoneyBillWave size={30} />} title="Money Back Guarantee" description="If goods have problems" />
            <ServiceFeature icon={<FaHeadset size={30} />} title="Online Support 24/7" description="Dedicated support" />
            <ServiceFeature icon={<FaShieldAlt size={30} />} title="Payment Secure" description="100% secure payment" />
        </article>
    );
};

export default ServiceFeatures;
