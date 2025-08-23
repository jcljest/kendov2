// Button Component with Contemporary Hover Animation
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  ...props 
}) => {
  const baseClasses = `
    relative overflow-hidden
    font-medium tracking-wide
    rounded-xl
    transition-all duration-300 ease-out
    transform-gpu
    active:scale-95
    focus:outline-none focus:ring-2 focus:ring-offset-2
    dark:focus:ring-offset-gray-900
  `;

  const variantClasses = {
    primary: `
      bg-blue-600 hover:bg-blue-700 
      text-white
      hover:shadow-lg hover:shadow-blue-500/25
      hover:-translate-y-0.5
      focus:ring-blue-500
      before:absolute before:inset-0 
      before:bg-gradient-to-r before:from-blue-400 before:to-purple-500
      before:opacity-0 hover:before:opacity-20
      before:transition-opacity before:duration-300
    `,
    secondary: `
      bg-gray-100 hover:bg-gray-200
      dark:bg-gray-800 dark:hover:bg-gray-700
      text-gray-900 dark:text-gray-100
      hover:shadow-md
      hover:-translate-y-0.5
      focus:ring-gray-500
      border border-gray-200 dark:border-gray-700
    `,
    outline: `
      bg-transparent
      border-2 border-gray-300 dark:border-gray-600
      text-gray-700 dark:text-gray-300
      hover:border-blue-500 dark:hover:border-blue-400
      hover:text-blue-600 dark:hover:text-blue-400
      hover:shadow-md
      hover:-translate-y-0.5
      focus:ring-blue-500
    `
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

 return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;