import { Service } from './types';
import { Environment } from '../environment/environment';

const useServices = () => {
    const list: Service[] = [
        { name: 'service1', address: '1.1.1.1', environment: Environment.TEST },
        { name: 'service2', address: '2.2.2.2', environment: Environment.PROD },
        { name: 'service3', address: '3.3.3.3', environment: Environment.PREPROD },
        { name: 'service4', address: '4.4.4.4', environment: Environment.TEST },
        { name: 'service5', address: '5.5.5.5', environment: Environment.PROD }
    ];
    return list;
};

export default useServices;
