import React, {useState, useEffect} from 'react';

import Modal from '../../Components/UI/Modal/Modal';

const withErrorHandler = (Component, axios) => {
    return (props) => {
        const [error, setError] = useState(null);

        const requestIntercepter = axios.interceptors.request.use(request => {
            setError(null)
            return request
        })

        const responseInterceptor = axios.interceptors.response.use(res => res, (err) => {
            setError(err)
            return Promise.reject(err)
        })

        useEffect (() => {
            return () => {
                axios.interceptors.request.eject(requestIntercepter)
                axios.interceptors.response.eject(responseInterceptor)
            }
        }, [requestIntercepter, responseInterceptor])

        const confirmErrorHandler = () => {
            setError(null)
        }

        return (
            <React.Fragment >
                <Modal show={error} closed={confirmErrorHandler}>
                    { error ? error.message : null}
                </Modal>
                <Component {...props} />
            </React.Fragment>
        )
    }
};

export default withErrorHandler;