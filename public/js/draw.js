var draw = new MapboxDraw({
  displayControlsDefault: false,
  controls: {
    line_string: true,
    trash: true,
  },
});

map.addControl(draw);

map.on('draw.create', (i) => {
  const features = i.features
  const data = map.getSource('lines')._data
  features[0].properties = {
    color: '#F7455D'
  }
  data.features.push(...features)
  map.getSource('lines').setData(data)

  const layer = map.getLayer('lines')
  if (layer) {
    map.removeLayer('lines')
  }

  map.addLayer({
    id: "lines",
    type: "line",
    source: "lines",
    paint: {
      "line-width": 10,
      // Use a get expression (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-get)
      // to set the line-color to a feature property value.
      "line-color": ["get", "color"],
      "line-opacity": 0.5
    },
  });
})