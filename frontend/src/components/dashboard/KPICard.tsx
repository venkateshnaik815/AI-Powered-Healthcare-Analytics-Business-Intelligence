import React from 'react';

interface KPICardProps {
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
  subtitle: string;
  isAlert?: boolean;
}

const KPICard: React.FC<KPICardProps> = ({ title, value, trend, trendUp, subtitle, isAlert }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <div className="text-gray-500 text-sm font-medium mb-1">{title}</div>
      <div className={`text-3xl font-bold ${isAlert ? 'text-red-600' : 'text-gray-800'}`}>{value}</div>
      <div className={`text-sm font-medium mt-2 flex items-center gap-1 ${trendUp ? 'text-green-500' : 'text-red-500'}`}>
        {trendUp ? '↑' : '↓'} {trend} <span className="text-gray-400 font-normal">{subtitle}</span>
      </div>
    </div>
  );
};

export default KPICard;
