import React, { useState } from "react";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  return (
    <div>
      {/* Tabs Navigation */}
      <div className="flex border-b">
        {children.map((child) => (
          <button
            key={child.props.label}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === child.props.label
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="p-4">
        {children.map((child) =>
          child.props.label === activeTab ? child.props.children : null
        )}
      </div>
    </div>
  );
};

const Tab = ({ children }) => <div>{children}</div>;

export { Tabs, Tab };
