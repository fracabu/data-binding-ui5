


sap.ui.require([
	"sap/m/Text",
	"sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/BindingMode"
], function (Text, JSONModel, XMLView, BindingMode) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
		// Create a JSON model from an object literal
		var oModel = new JSONModel({
			user: "",
            password: "",
            enabled: true,
            panelHeaderText: "Accedi al sistema",
            

		});

       // Set the model to the core
       oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);

        
        


		// Assign the model object to the SAPUI5 core
		sap.ui.getCore().setModel(oModel);


		
        // Display the XML view called "App"
        var oView = new XMLView({
            viewName: "sap.ui.demo.db.view.App"
        }).placeAt("content");

        // Register the view with the message manager
        sap.ui.getCore().getMessageManager().registerObject(oView, true);

        


		
	});
});
