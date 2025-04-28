import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    icon,
    loading = false,
    disabled = false,
    fullWidth = false,
    onClick,
    type = 'button',
    className = ''
}) => {
    return (
        <motion.button
            type={type}
            className={`custom-button ${variant} ${size} ${fullWidth ? 'full-width' : ''} ${className}`}
            whileHover={!disabled && { scale: 1.02 }}
            whileTap={!disabled && { scale: 0.98 }}
            disabled={disabled || loading}
            onClick={onClick}
        >
            {loading ? (
                <span className="loading-spinner"></span>
            ) : (
                <>
                    {icon && <span className="button-icon">{icon}</span>}
                    <span className="button-text">{children}</span>
                </>
            )}
        </motion.button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    icon: PropTypes.node,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.string,
    className: PropTypes.string
};

export default Button;