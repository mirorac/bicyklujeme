map.on("load", function () {
  map.addSource("lines", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        // {
        //   type: "Feature",
        //   properties: {
        //     color: "#F7455D", // red
        //   },
        //   geometry: {
        //     type: "LineString",
        //     coordinates: [
        //       [-122.4833858013153, 37.829607404976734],
        //       [-122.4830961227417, 37.82932776098012],
        //       [-122.4830746650696, 37.82932776098012],
        //       [-122.48218417167662, 37.82889558180985],
        //       [-122.48218417167662, 37.82890193740421],
        //       [-122.48221099376678, 37.82868372835086],
        //       [-122.4822163581848, 37.82868372835086],
        //       [-122.48205006122589, 37.82801003030873],
        //     ],
        //   },
        // },
      ],
    },
  });
  // map.addLayer({
  //   id: "lines",
  //   type: "line",
  //   source: "lines",
  //   paint: {
  //     "line-width": 3,
  //     // Use a get expression (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-get)
  //     // to set the line-color to a feature property value.
  //     "line-color": ["get", "color"],
  //   },
  // });
});
