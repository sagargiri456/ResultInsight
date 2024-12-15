// components/Insights.tsx
import React, { useState, useEffect } from 'react';

const Insights = () => {
  const [clusters, setClusters] = useState<any>(null);
  const [trends, setTrends] = useState<any>(null);

  const fetchClusters = async () => {
    const res = await fetch('/api/insights/clusters');
    const data = await res.json();
    setClusters(data);
  };

  const fetchTrends = async () => {
    const res = await fetch('/api/insights/trends');
    const data = await res.json();
    setTrends(data);
  };

  useEffect(() => {
    fetchClusters();
    fetchTrends();
  }, []);

  return (
    <div>
      <h3>Clusters:</h3>
      <pre>{JSON.stringify(clusters, null, 2)}</pre>

      <h3>Trends:</h3>
      <pre>{JSON.stringify(trends, null, 2)}</pre>
    </div>
  );
};

export default Insights;
