require([
    "esri/Map",
    "esri/Basemap",
    "esri/views/SceneView",
    "esri/widgets/BasemapGallery",
    "esri/Graphic",
    "esri/symbols/TextSymbol",
    "esri/geometry/Point",
    "esri/geometry/SpatialReference"
], (
    Map,
    Basemap,
    SceneView,
    BasemapGallery,
    Graphic,
    TextSymbol,
    Point,
    SpatialReference
) => {
    const map = new Map({
        basemap: new Basemap({
            portalItem: {
                id: "0560e29930dc4d5ebeb58c635c0909c9" // References the 3D Topographic Basemap
            }
        })
    });


    const view = new SceneView({// Rexburg, Idaho
        container: "viewDiv",
        map: map,
        camera: {
            position: {
                longitude: -111.788574,
                latitude: 43.823110,
                z: 1620.71497
            },
            heading: 57.02,
            tilt: 56.97
        }
    });

    // // Places of interest with their coordinates and labels
    // const placesOfInterest = [
    //     { name: "Legacy Flight Museum", longitude: -111.80683898925781, latitude: 43.83464431762695 },
    //     { name: "Museum of Rexburg", longitude: -111.78464, latitude: 43.82738 },
    //     { name: "Rexburg Rapids", longitude: -111.785234, latitude: 43.831761 }

    // ];

    // // Loop through your places of interest and add text labels
    // placesOfInterest.forEach(place => {
    //     const point = new Point({
    //         longitude: place.longitude,
    //         latitude: place.latitude,
    //         spatialReference: SpatialReference.WGS84
    //     });

    //     const textSymbol = new TextSymbol({
    //         text: place.name,
    //         font: {
    //             size: 12,
    //             weight: "bold"
    //         },
    //         color: "black",
    //         haloSize: 2, // Add a halo (outline) around the text
    //         haloColor: "red" // Set the halo color
    //     });

    //     const graphic = new Graphic({
    //         geometry: point,
    //         symbol: textSymbol
    //     });

    //     view.graphics.add(graphic);
    // });

    // const basemapGallery = new BasemapGallery({
    //     view: view
    // });

    // Uncomment the code below to add the BasemapGallery widget
    // view.ui.add(basemapGallery, {
    //     position: "top-right"
    // });
});
