import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { Button } from 'react-bootstrap';

const cookies = new Cookies();

function Cookie() {

    const [acceptCookie, setAcceptCookie] = useState(false);

    const cookies = new Cookies();
    console.log(cookies.get('allowCookie'));
    const cookimbenim = cookies.get('allowCookie');
    if ( cookimbenim === undefined) {
        cookies.set('allowCookie', 'false', { path: '/', expires: Date().getDate + 1 });
    }

    const handleSetCookie = () => {
        cookies.set('allowCookie', 'true', { path: '/', expires: Date().getDate + 1 });
        setAcceptCookie(true);
    }

    // useEffect(() => {
    //     // Update the document title using the browser API
    //     cookies.set('allowCookie', 'false', { path: '/', expires: Date().getDate + 1 });
    //   });

    if (cookies.get('allowCookie') === 'false') {
            return (
                <div className='allowCookie-full-part'>
                    <p>We use cookies to give you the best online experience. By clicking "Accept Cookies" or clicking in to any content on this site, you agree to allow cookies to be placed. To find out more visit our
                         <a href='privacyPolicy' >Cookie Notice </a></p>
                    <Button variant="danger" onClick={() => handleSetCookie()}><i className="fas fa-check"></i>Accept Cookies</Button>
                </div >
            );
        

    }
    else{
        return ("")
            
    }
    console.log(cookies.get('allowCookie'));

    //if (cookies.get('allowCookie') === 'true') {
    //    console.log(cookies.get('allowCookie'));
    //}
}

export default Cookie;
