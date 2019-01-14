export default {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        id: 'test', floor: 'nb02', room: '1',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [111, 1811 - 411],
          [421, 1811 - 411],
          [421, 1811 - 833],
          [111, 1811 - 833],
        ]],
      },
    },
  ],
};
