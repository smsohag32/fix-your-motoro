import React, { useState } from 'react';
import UserAddToCardTable from './UserAddToCardTable';

const BathroomTracker = () => {
  const [usageCount, setUsageCount] = useState(0);

  const increaseUsage = () => {
    setUsageCount(usageCount + 1);
  };

  const decreaseUsage = () => {
    if (usageCount > 0) {
      setUsageCount(usageCount - 1);
    }
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-semibold">Bathroom Usage Tracker</h2>
      <p className="mb-4 text-xl">Usage Count: {usageCount}</p>
      <UserAddToCardTable
        usageCount={usageCount}
        increaseUsage={increaseUsage}
        decreaseUsage={decreaseUsage}
      />
    </div>
  );
};

export default BathroomTracker;
