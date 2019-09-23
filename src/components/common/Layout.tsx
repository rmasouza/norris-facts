import React, { FC } from 'react';
import './Layout.scss';

const Layout: FC = ({ children }) => (
    <article className="layout-component">
        <header className="header">
            <h1>Chuck Norris Facts</h1>
        </header>
        <section className="content">
            {children}
        </section>
        <footer className="footer" />
    </article>
);

export default Layout;
