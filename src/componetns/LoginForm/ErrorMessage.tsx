import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="p-3 bg-red-50 border border-red-200 rounded-lg mb-2">
    <div className="flex items-center">
      <span className="text-red-500 mr-2">⚠️</span>
      <span className="text-red-700">{message}</span>
    </div>
  </div>
);
