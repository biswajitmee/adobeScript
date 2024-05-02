// Create a new project
var project = app.newProject();

// Define composition settings
var compWidth = 1920; // Change to your desired width
var compHeight = 1080; // Change to your desired height
var compDuration = 10; // Change to your desired duration (in seconds)
var compFrameRate = 30; // Change to your desired frame rate

// Create a new composition
var composition = project.items.addComp("My Composition", compWidth, compHeight, 1, compDuration, compFrameRate);

// Define the path to your background image
var backgroundImageFile = File.openDialog("Select Background Image");

// Check if the user selected a file
if (backgroundImageFile) {
    // Import the background image into After Effects
    var importedFootage = project.importFile(new ImportOptions(backgroundImageFile));
    
    // Add the imported footage to the composition
    var backgroundLayer = composition.layers.add(importedFootage);
    
    // Center the background image in the composition
    backgroundLayer.position.setValue([compWidth / 2, compHeight / 2]);
    
    // Scale the background image to fit the composition
    var scaleFactor = Math.max(compWidth / backgroundLayer.width, compHeight / backgroundLayer.height);
    backgroundLayer.scale.setValue([scaleFactor * 100, scaleFactor * 100]);
} else {
    // Alert the user if no file was selected
    alert("No background image selected.");
}

// Save the project
var saveFile = new File("~/Desktop/MyProject.aep"); // Change the path as needed
project.save(saveFile);

// Close the project
project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
