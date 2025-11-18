import type { AudienceRole } from '../data/types';
import { roles } from '../data/roles';

interface RoleTabsProps {
  selectedRole: AudienceRole | null;
  onSelectRole: (role: AudienceRole | null) => void;
}

export const RoleTabs: React.FC<RoleTabsProps> = ({ selectedRole, onSelectRole }) => {
  return (
    <div className="border-b border-gray-200">
      <nav className="flex space-x-8 overflow-x-auto">
        <button
          onClick={() => onSelectRole(null)}
          className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
            selectedRole === null
              ? 'border-ms-blue-600 text-ms-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          All Roles
        </button>
        {roles.map((role) => (
          <button
            key={role.value}
            onClick={() => onSelectRole(role.value)}
            className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
              selectedRole === role.value
                ? 'border-ms-blue-600 text-ms-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            title={role.description}
          >
            <span className="mr-2">{role.icon}</span>
            {role.label}
          </button>
        ))}
      </nav>
    </div>
  );
};
