var React = require('react');

const Avatar = ({url, login}) => {
    return (
        <img
            className='avatar'
            src={url}
            alt={'Avatar for ' + login}
        />
    );
}

module.exports = Avatar;