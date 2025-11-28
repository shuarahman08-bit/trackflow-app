import React, { useState } from 'react';

const Dashboard: React.FC = () => {
  const [videos] = useState([
    { id: 1, title: 'How to Design Thumbnails', views: 12500, leads: 342, conversionRate: 2.7 },
    { id: 2, title: 'Advanced Editing Techniques', views: 8900, leads: 187, conversionRate: 2.1 },
    { id: 3, title: 'YouTube SEO Guide', views: 15300, leads: 521, conversionRate: 3.4 },
  ]);

  const totalViews = videos.reduce((sum, v) => sum + v.views, 0);
  const totalLeads = videos.reduce((sum, v) => sum + v.leads, 0);
  const avgConversion = (videos.reduce((sum, v) => sum + v.conversionRate, 0) / videos.length).toFixed(1);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      
      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Views</h3>
          <p className="stat-value">{totalViews.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h3>Total Leads</h3>
          <p className="stat-value">{totalLeads}</p>
        </div>
        <div className="stat-card">
          <h3>Avg Conversion</h3>
          <p className="stat-value">{avgConversion}%</p>
        </div>
        <div className="stat-card">
          <h3>Tracked Videos</h3>
          <p className="stat-value">{videos.length}</p>
        </div>
      </div>

      <div className="videos-section">
        <h3>Your Tracked Videos</h3>
        <table className="videos-table">
          <thead>
            <tr>
              <th>Video Title</th>
              <th>Views</th>
              <th>Leads Generated</th>
              <th>Conversion Rate</th>
            </tr>
          </thead>
          <tbody>
            {videos.map(video => (
              <tr key={video.id}>
                <td>{video.title}</td>
                <td>{video.views.toLocaleString()}</td>
                <td>{video.leads}</td>
                <td>{video.conversionRate}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>{`
        .dashboard {
          padding: 20px;
          background-color: #f5f5f5;
          min-height: 100vh;
        }
        
        .dashboard h2 {
          color: #333;
          margin-bottom: 30px;
        }
        
        .stats-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }
        
        .stat-card {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          text-align: center;
        }
        
        .stat-card h3 {
          color: #666;
          font-size: 14px;
          margin-bottom: 10px;
          text-transform: uppercase;
        }
        
        .stat-value {
          color: #2563eb;
          font-size: 28px;
          font-weight: bold;
          margin: 0;
        }
        
        .videos-section {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .videos-section h3 {
          color: #333;
          margin-bottom: 20px;
        }
        
        .videos-table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .videos-table th {
          background-color: #f0f0f0;
          padding: 12px;
          text-align: left;
          font-weight: 600;
          color: #333;
          border-bottom: 2px solid #ddd;
        }
        
        .videos-table td {
          padding: 12px;
          border-bottom: 1px solid #eee;
          color: #666;
        }
        
        .videos-table tr:hover {
          background-color: #f9f9f9;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
