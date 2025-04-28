import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({
    children,
    variant = 'default',
    hoverable = true,
    className = '',
    onClick
}) => {
    return (
        <motion.div
            className={`custom-card ${variant} ${hoverable ? 'hoverable' : ''} ${className}`}
            whileHover={hoverable ? { y: -5 } : {}}
            onClick={onClick}
        >
            {children}
        </motion.div>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['default', 'outlined', 'elevated']),
    hoverable: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func
};

export default Card;