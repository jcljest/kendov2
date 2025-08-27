import { Link } from "react-router-dom";

const Card = ({ 
  children, 
  variant = 'default',
  className = '',
  href,
  as,
  ...props 
}) => {

  const baseClasses = `
    relative
    rounded-2xl
    transition-all duration-500 ease-out
    transform-gpu
    cursor-pointer
    group
  `;

  const variantClasses = {
    default: `
      bg-white dark:bg-gray-800
      border border-gray-200 dark:border-gray-700
      hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50
      hover:-translate-y-2
      hover:border-gray-300 dark:hover:border-gray-600
      after:absolute after:inset-0 after:rounded-2xl
      after:opacity-0 after:transition-opacity after:duration-500
      after:bg-gradient-to-br after:from-blue-50 after:to-purple-50
      dark:after:from-blue-950/20 dark:after:to-purple-950/20
      hover:after:opacity-100
    `,
    elevated: `
      bg-white dark:bg-gray-800
      shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50
      hover:shadow-2xl hover:shadow-gray-300/50 dark:hover:shadow-gray-900/80
      hover:-translate-y-3 hover:rotate-1
      border border-gray-100 dark:border-gray-700
      after:absolute after:inset-0 after:rounded-2xl
      after:opacity-0 after:transition-all after:duration-500
      after:bg-gradient-to-tr after:from-amber-50 after:via-orange-50 after:to-red-50
      dark:after:from-amber-950/10 dark:after:via-orange-950/10 dark:after:to-red-950/10
      hover:after:opacity-100
    `,
    minimal: `
      bg-gray-50 dark:bg-gray-900
      hover:bg-gray-100 dark:hover:bg-gray-800
      hover:shadow-lg
      hover:-translate-y-1
      border-l-4 border-transparent
      hover:border-l-blue-500
    `
  };


  const Root = href ? (Link) : (as || "div");
  const rootProps = href ? { to: href } : {};

  // If children are supplied, keep legacy behavior 100%
  const legacy = children != null;



  return (
    <Root
    className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    {...rootProps}
    {...props}
  >
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
    </Root>
  );


};

export default Card;