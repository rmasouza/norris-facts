import React, { FC } from 'react';
import './NorrisFact.scss';
import { Fact } from '../../models/Fact';

interface INorrisFactProps {
    fact: Fact;
}

const NorrisFactBase: FC<INorrisFactProps> = (props) => {
    const { fact } = props;

    return (
        <section className="norris-fact">
            <p className="text">
                {
                    fact.value
                }
            </p>
        </section>
    );
};

const NorrisFact = NorrisFactBase;
export default NorrisFact;
