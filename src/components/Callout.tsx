import React from 'react';

interface CalloutProps {
  type: 'info' | 'warning' | 'tip' | 'important';
  title?: string;
  children: React.ReactNode;
}

export const Callout: React.FC<CalloutProps> = ({ type, title, children }) => {
  const styles = {
    info: {
      container: 'bg-blue-50 border-blue-200',
      icon: '💡',
      iconBg: 'bg-blue-100 text-blue-600',
      title: 'text-blue-900',
      text: 'text-blue-800',
    },
    warning: {
      container: 'bg-yellow-50 border-yellow-200',
      icon: '⚠️',
      iconBg: 'bg-yellow-100 text-yellow-600',
      title: 'text-yellow-900',
      text: 'text-yellow-800',
    },
    tip: {
      container: 'bg-green-50 border-green-200',
      icon: '✅',
      iconBg: 'bg-green-100 text-green-600',
      title: 'text-green-900',
      text: 'text-green-800',
    },
    important: {
      container: 'bg-red-50 border-red-200',
      icon: '🔴',
      iconBg: 'bg-red-100 text-red-600',
      title: 'text-red-900',
      text: 'text-red-800',
    },
  };

  const style = styles[type];

  return (
    <div className={`${style.container} border rounded-lg p-4 flex gap-4`}>
      <div className={`${style.iconBg} w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0`}>
        <span className="text-xl">{style.icon}</span>
      </div>
      <div className="flex-1">
        {title && <h4 className={`font-semibold ${style.title} mb-2`}>{title}</h4>}
        <div className={`${style.text} text-sm`}>{children}</div>
      </div>
    </div>
  );
};
