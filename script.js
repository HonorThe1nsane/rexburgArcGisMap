require([
    "esri/Map",
    "esri/Basemap",
    "esri/views/SceneView",
    "esri/Graphic",
    "esri/geometry/Point",
    "esri/geometry/SpatialReference",
    "esri/symbols/TextSymbol",
    "esri/PopupTemplate", // Add PopupTemplate
    "dojo/domReady!"],
    (
        Map,
        Basemap,
        SceneView,
        Graphic,
        Point,
        SpatialReference,
        TextSymbol,
        PopupTemplate // Add PopupTemplate

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
                    z: 2000.00
                    // 1620.71497
                },
                heading: 57.02,
                tilt: 56.97
            }
        });

        // Places of interest with their coordinates and labels
        const placesOfInterest = [
            { name: "Legacy Flight Museum", longitude: -111.80683898925781, latitude: 43.83464431762695 },
            { name: "Museum of Rexburg", longitude: -111.78464, latitude: 43.82738 },
            { name: "Rexburg Rapids", longitude: -111.7852344, latitude: 43.8317607 },
            { name: "Madison County Courthouse", longitude: -111.7787395, latitude: 43.8264705 },
            { name: "Fat Cats", longitude: -111.7809256, latitude: 43.8361077 },
            { name: "Davidson's House", longitude: -111.8119158, latitude: 43.814388 },
            { name: "Heber Hatchets", longitude: -111.779423, latitude: 43.821909 },
            { name: "Rexburg Idaho Temple", longitude: -111.7790882, latitude: 43.8109096 },
            { name: "Rexburg Idaho Temple", longitude: -111.7790882, latitude: 43.8109096 },
            { name: "Rexburg Idaho Temple", longitude: -111.7790882, latitude: 43.8109096 },
            { name: "Rexburg Idaho Temple", longitude: -111.7790882, latitude: 43.8109096 },
            { name: "Rexburg Idaho Temple", longitude: -111.7790882, latitude: 43.8109096 },
            { name: "Rexburg Idaho Temple", longitude: -111.7790882, latitude: 43.8109096 },
            { name: "Rexburg Idaho Temple", longitude: -111.7790882, latitude: 43.8109096 },
            { name: "Rexburg Idaho Temple", longitude: -111.7790882, latitude: 43.8109096 },
            { name: "Rexburg Idaho Temple", longitude: -111.7790882, latitude: 43.8109096 },
            { name: "Rexburg Idaho Temple", longitude: -111.7790882, latitude: 43.8109096 },
            { name: "Rexburg Idaho Temple", longitude: -111.7790882, latitude: 43.8109096 },
            { name: "Rexburg Idaho Temple", longitude: -111.7790882, latitude: 43.8109096 },
            { name: "Rexburg Idaho Temple", longitude: -111.7790882, latitude: 43.8109096 },
            { name: "Rexburg Idaho Temple", longitude: -111.7790882, latitude: 43.8109096 }
        ];

        // Loop through your places of interest and add text labels
        placesOfInterest.forEach(place => {
            const point = new Point({
                longitude: place.longitude,
                latitude: place.latitude,
                spatialReference: SpatialReference.WGS84
            });

            const textSymbol = new TextSymbol({
                text: place.name,
                font: {
                    size: 12,
                    weight: "bold"
                },
                color: "black",
                haloSize: 2, // Add a halo (outline) around the text
                haloColor: "red" // Set the halo color
            });

            const graphic = new Graphic({
                geometry: point,
                symbol: textSymbol
            });

            view.graphics.add(graphic);
        });

        // Create a PopupTemplate
        const popupTemplate = new PopupTemplate({
            title: "{name}", // Use the 'name' attribute as the title
            content: "This is {name}." // Customize the content as needed
        });

        // Set the PopupTemplate for the view
        view.popup.defaultPopupTemplate = popupTemplate;

        const basemapGallery = new BasemapGallery({
            view: view
        });
    });
