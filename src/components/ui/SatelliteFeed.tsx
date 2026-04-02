'use client';

import { useEffect, useState } from 'react';

interface SatelliteData {
  id: string;
  signal: number;
  altitude: number;
  velocity: number;
  coordinates: [number, number];
}

const SatelliteFeed = () => {
  const [satellites, setSatellites] = useState<SatelliteData[]>([]);

  useEffect(() => {
    // Simulate live satellite data
    const mockSatellites: SatelliteData[] = [
      { id: 'SAT-001', signal: 98, altitude: 408, velocity: 7660, coordinates: [51.5074, -0.1278] },
      { id: 'SAT-002', signal: 85, altitude: 420, velocity: 7640, coordinates: [40.7128, -74.006] },
      { id: 'SAT-003', signal: 92, altitude: 412, velocity: 7650, coordinates: [35.6762, 139.6503] },
      { id: 'SAT-004', signal: 76, altitude: 410, velocity: 7660, coordinates: [-33.8688, 151.2093] },
    ];

    setSatellites(mockSatellites);

    // Simulate real-time data updates
    const interval = setInterval(() => {
      setSatellites((prev) =>
        prev.map((sat) => ({
          ...sat,
          signal: Math.max(60, Math.min(99, sat.signal + (Math.random() - 0.5) * 5)),
          altitude: sat.altitude + (Math.random() - 0.5) * 2,
          velocity: sat.velocity + (Math.random() - 0.5) * 10,
          coordinates: [
            sat.coordinates[0] + (Math.random() - 0.5) * 0.01,
            sat.coordinates[1] + (Math.random() - 0.5) * 0.01,
          ],
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3">
      <div className="matrix-text text-[#0f0] text-sm border-b border-[#0f0] pb-2">
        {'> '} SATELLITE NETWORK STATUS
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {satellites.map((sat) => (
          <div key={sat.id} className="border-glow-red p-3 bg-black/40 font-mono text-xs">
            <div className="flex justify-between items-center mb-2">
              <span className="matrix-text text-[#0f0]">{sat.id}</span>
              <div className={`px-2 py-1 rounded ${sat.signal > 85 ? 'bg-[#0f0]/20 text-[#0f0]' : 'bg-[#ff0033]/20 text-[#ff0033]'}`}>
                SIGNAL {sat.signal.toFixed(0)}%
              </div>
            </div>

            <div className="space-y-1 matrix-text text-[#00ffff]">
              <div>
                <span className="text-[#0f0]">ALT:</span> {sat.altitude.toFixed(2)} km
              </div>
              <div>
                <span className="text-[#0f0]">VEL:</span> {sat.velocity.toFixed(2)} m/s
              </div>
              <div>
                <span className="text-[#0f0]">POS:</span> {sat.coordinates[0].toFixed(4)}°, {sat.coordinates[1].toFixed(4)}°
              </div>
            </div>

            {/* Signal visualization */}
            <div className="mt-2 flex gap-1">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 h-1 ${i < Math.floor(sat.signal / 10) ? 'bg-[#0f0]' : 'bg-[#0f0]/20'}`}
                  style={{
                    boxShadow:
                      i < Math.floor(sat.signal / 10) ? '0 0 4px #0f0' : 'none',
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SatelliteFeed;
