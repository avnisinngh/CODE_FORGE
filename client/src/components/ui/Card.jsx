export const Card = ({ children, className }) => (
  <div className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children }) => (
  <div className="p-4 text-gray-700">{children}</div>
);
