//import proptypes
import PropTypes from 'prop-types';
const HeadTitle = ({ children }) => {
    HeadTitle.propTypes = {
        children: PropTypes.string
    }
    return (
        <div className="mt-20 mb-8 flex justify-center items-center">
            <h1 className="font-bold text-2xl place-items-center lg:text-4xl">{children}</h1>
        </div>
    );
}

export default HeadTitle