import React from 'react';
import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Tech Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful City, Tech Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    Tech Repairs<br />
                    somewhere Beautiful<br />
                    Earth<br />
                    <a href="tel:+91">9999999999</a>
                </address>
                <br />
                <p>Owner: Techie</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public