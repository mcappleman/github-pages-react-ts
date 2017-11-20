import * as React from 'react';
import * as moment from 'moment';

export default class Footer extends React.Component {

    render() {
        return (
            <footer>
                <hr />
                &copy; Application Name {moment().format('YYYY')}
            </footer>
        );
    }

}