import React, {FC} from 'react';
import { RouteComponentProps } from '@reach/router';

type NotFoundProps = Partial<RouteComponentProps>;

const NotFound: FC<NotFoundProps> = () => (
    <section>
        Not found!
    </section>
);

export default NotFound;


